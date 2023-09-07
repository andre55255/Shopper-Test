import { ProductsRepositoryImpl } from "./../repositories/products-repository-impl";
import { ResultDto } from "../dtos/result-dto";
import {
    buildMessageError,
    buildResult,
    isNumber,
} from "../helpers/static-methods";
import { ProductsServiceInterface } from "./products-service-interface";
import path from "path";
import logger from "../middlewares/logger";
import {
    ProductFileDto,
    ProductFileValidedDto,
    ProductUpdateDto,
} from "../dtos/product-dtos";
import { ProductsRepositoryInterface } from "../repositories/products-repository-interface";
import { Product } from "../database/models/products";

export class ProductServiceImpl implements ProductsServiceInterface {
    public async updateProducts(data: ProductUpdateDto[]): Promise<ResultDto> {
        try {
            const productRepo: ProductsRepositoryInterface =
                new ProductsRepositoryImpl();

            let productsUps: Product[] = [];

            for (let i = 0; i < data.length; i++) {
                const prodCurrent = data[i];

                const prodRepo = await productRepo.getById(prodCurrent.code);
                if (!prodRepo) {
                    throw new Error(
                        `ERRO 00: Produto não encontrado com o código ${prodCurrent.code}`
                    );
                }

                productsUps.push({
                    ...prodRepo,
                    sales_price: prodCurrent.newPrice,
                });
            }

            await productRepo.updateProduct(productsUps);
            return buildResult(true, "Produtos atualizados com sucesso");
        } catch (ex) {
            logger.error(
                buildMessageError("ProductService updateProducts", ex)
            );

            const exParsed = ex as Error;
            if (/ERRO/.test(exParsed.message)) {
                return buildResult(false, exParsed.message);
            }

            return buildResult(false, "Falha inesperada ao atualizar produtos");
        }
    }

    public async handleFile(file: Express.Multer.File): Promise<ResultDto> {
        try {
            const resultValidFile = this.validFile(file);
            if (!resultValidFile.success) return resultValidFile;

            const resultDataFile = this.getDataFile(file);
            if (!resultDataFile.success || !resultDataFile.object)
                return resultDataFile;

            const resultValidDataProducts = await this.validDataProducts(
                resultDataFile.object as ProductFileDto[]
            );
            return resultValidDataProducts;
        } catch (ex) {
            logger.error(buildMessageError("ProductService handleFile", ex));
            return buildResult(
                false,
                "Falha inesperada no processamento do arquivo"
            );
        }
    }

    public async validDataProducts(list: ProductFileDto[]): Promise<ResultDto> {
        try {
            const productRepo: ProductsRepositoryInterface =
                new ProductsRepositoryImpl();

            const itemsValideds: ProductFileValidedDto[] = [];

            for (let i = 0; i < list.length; i++) {
                const item = list[i];

                // Verifica existência de produto na base de dados
                const productSave = await productRepo.getById(item.productCode);
                if (!productSave) {
                    throw new Error(
                        `ERRO 00: Não foi encontrado um produto com o código ${item.productCode} na base de dados, verifique`
                    );
                }

                const aux: ProductFileValidedDto = {
                    code: productSave.code,
                    name: productSave.name,
                    costPrice: productSave.cost_price,
                    currentPrice: productSave.sales_price,
                    newPrice: item.newPrice,
                    isInvalid: false,
                    errorDs: [],
                };

                // Verifica ajuste maior/menor que 10%
                const valueDed = Number(productSave.sales_price) * 0.1;
                const valueLimitMax = Number(productSave.sales_price) + valueDed;
                const valueLimitMin = Number(productSave.sales_price) - valueDed;

                if (
                    item.newPrice < valueLimitMin ||
                    item.newPrice > valueLimitMax
                ) {
                    aux.isInvalid = true;
                    aux.errorDs.push(
                        "Reajuste de preço do produto maior/menor que 10% do preço atual"
                    );
                }

                // Verifica Preço de custo e venda
                if (productSave.cost_price > item.newPrice) {
                    aux.isInvalid = true;
                    aux.errorDs.push(
                        "Preço de venda do produto abaixo do preço de custo"
                    );
                }
                itemsValideds.push(aux);
            }
            // await this.verifyPackages(itemsValideds);

            return buildResult(
                true,
                "Produtos validados com sucesso",
                itemsValideds
            );
        } catch (ex) {
            logger.error(
                buildMessageError("ProductService validDataProducts", ex)
            );

            const exParsed = ex as Error;
            if (/ERRO/.test(exParsed.message)) {
                return buildResult(false, exParsed.message);
            }

            return buildResult(
                false,
                "Falha inesperada ao validar produtos lidos"
            );
        }
    }

    private verifyPackages(itemsValideds: ProductFileValidedDto[]) {
        try {
            const productRepo: ProductsRepositoryInterface =
                new ProductsRepositoryImpl();

            const newList: ProductFileValidedDto[] = [];

            itemsValideds.forEach(async (item) => {
                const packs = await productRepo.isPackProduct(item.code);
                if (packs) {
                    const productsPack = await productRepo.getProductsByPackId(
                        item.code
                    );

                    if (productsPack) {
                        const totalValuePack = productsPack
                            .map((item) => item.quantity * item.valueProd)
                            .reduce((prev, acc) => prev + acc, 0);
                    }
                } else {
                    newList.push(item);
                }
            });

            return newList;
        } catch (ex) {
            logger.error(
                buildMessageError("ProductService verifyPackages", ex)
            );
            return buildResult(
                false,
                "Falha inesperada ao validar pacotes de itens da lista"
            );
        }
    }

    private validFile(file: Express.Multer.File): ResultDto {
        if (!file) {
            return buildResult(false, "Arquivo não informado");
        }
        const validExtensions = [".csv"];
        const extname = path.extname(file.originalname).toLowerCase();

        if (!validExtensions.includes(extname)) {
            return buildResult(
                false,
                `Extensões de arquivo aceitas: ${validExtensions.join(" ")}`
            );
        }
        return buildResult(true, "Arquivo validado com sucesso");
    }

    private getDataFile(file: Express.Multer.File): ResultDto {
        try {
            const csvString = file.buffer.toString("utf-8");

            const lines = csvString.split("\n");
            if (!lines || lines.length === 1)
                return buildResult(false, "Nenhum dado para ser lido");

            const listData: ProductFileDto[] = [];

            lines.forEach((line, index) => {
                if (index === 0) return;

                const fields = line.split(",");

                const codeProd = fields[0];
                const newPriceProd = fields[1];

                if (!isNumber(codeProd) || !isNumber(newPriceProd)) {
                    throw new Error(
                        `ERRO 00: O valor informado na linha ${
                            index + 1
                        }: '${codeProd}, ${newPriceProd}' não é um número. Verifique.`
                    );
                }

                listData.push({
                    newPrice: Number(newPriceProd),
                    productCode: Number(codeProd),
                });
            });
            return buildResult(
                true,
                "Dados de arquivo lidos com sucesso",
                listData
            );
        } catch (ex) {
            logger.error(buildMessageError("ProductService getDataFile", ex));

            const exParsed = ex as Error;
            if (/ERRO/.test(exParsed.message)) {
                return buildResult(false, exParsed.message);
            }
            return buildResult(
                false,
                "Falha inesperada na leitura de dados de arquivo csv"
            );
        }
    }
}
