import { db } from "../database/database";
import { Product } from "../database/models/products";
import { GetPackProductsDto } from "../dtos/product-dtos";
import { buildMessageError } from "../helpers/static-methods";
import logger from "../middlewares/logger";
import { ProductsRepositoryInterface } from "./products-repository-interface";

export class ProductsRepositoryImpl implements ProductsRepositoryInterface {
    public async updateProduct(product: Product[]): Promise<void> {
        try {
            await db.transaction(async (trans) => {
                for (let i = 0; i < product.length; i++) {
                    const prodCurrent = product[i];

                    await db("products")
                        .where("code", prodCurrent.code)
                        .transacting(trans)
                        .update({
                            sales_price: prodCurrent.sales_price,
                            cost_price: prodCurrent.cost_price,
                        });
                }
            });
        } catch (ex) {
            logger.error(
                buildMessageError("ProductsRepository updateProduct", ex)
            );
            throw new Error(
                "ERRO 00: Falha inesperada ao atualizar registro de produtos na base de dados"
            );
        }
    }

    public async getProductsByPackId(
        id: number
    ): Promise<GetPackProductsDto[]> {
        try {
            const getDataPack = await db
                .select([
                    "products.code as productId",
                    "products.sales_price as valueProd",
                    "packs.qty as quantity ",
                ])
                .from("packs")
                .innerJoin("products", "packs.product_id", "products.code")
                .where("pack_id", id);

            return getDataPack as GetPackProductsDto[];
        } catch (ex) {
            logger.error(
                buildMessageError("ProductsRepository getProductsByPackId", ex)
            );
            return null;
        }
    }

    public async getById(id: number): Promise<Product> {
        try {
            const product = await db
                .select()
                .from("products")
                .where("code", id);

            if (!product || !product.length) return null;

            return product[0];
        } catch (ex) {
            logger.error(buildMessageError("ProductsRepository getbyId", ex));
            return null;
        }
    }

    public async isPackProduct(productId: number): Promise<boolean> {
        try {
            const packs = await db
                .select()
                .from("packs")
                .where("pack_id", productId);

            return packs && packs.length > 0;
        } catch (ex) {
            logger.error(
                buildMessageError("ProductsRepository getPacksByProductId", ex)
            );
            return null;
        }
    }
}
