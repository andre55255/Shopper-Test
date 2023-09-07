import { Request, Response } from "express";
import logger from "../middlewares/logger";
import { buildApiResponse, buildMessageError } from "../helpers/static-methods";
import { ProductsServiceInterface } from "../services/products-service-interface";
import { ProductServiceImpl } from "../services/products-service-impl";
import { ProductUpdateDto } from "../dtos/product-dtos";

class ProductController {
    public async readFileProducts(req: Request, res: Response) {
        logger.info(`Accessando endpoint: POST /product/file`);
        try {
            const productService: ProductsServiceInterface =
                new ProductServiceImpl();

            const result = await productService.handleFile(req.file);

            if (result.success) {
                return res
                    .status(200)
                    .json(
                        buildApiResponse(
                            200,
                            "Arquivo processado com sucesso",
                            result.object
                        )
                    );
            }
            return res.status(400).json(buildApiResponse(400, result.message));
        } catch (ex) {
            logger.error(
                buildMessageError("ProductController readFileProducts", ex)
            );
            return res
                .status(500)
                .json(
                    buildApiResponse(
                        500,
                        "Falha inesperada ao processar o arquivo enviado"
                    )
                );
        }
    }

    public async updateProducts(req: Request, res: Response) {
        logger.info(`Accessando endpoint: POST /product/update`);
        try {
            const productService: ProductsServiceInterface =
                new ProductServiceImpl();

            const dataBody = req.body as ProductUpdateDto[];
            if (!Array.isArray(dataBody)) {
                return res
                    .status(400)
                    .json(buildApiResponse(400, "Dados não informados"));
            }

            const result = await productService.updateProducts(dataBody);

            if (result.success) {
                return res
                    .status(200)
                    .json(
                        buildApiResponse(
                            200,
                            "Produtos atualizados com sucesso",
                            result.object
                        )
                    );
            }
            return res.status(400).json(buildApiResponse(400, result.message));
        } catch (ex) {
            logger.error(
                buildMessageError("ProductController updateProducts", ex)
            );
            return res
                .status(500)
                .json(
                    buildApiResponse(
                        500,
                        "Falha inesperada ao atualizar produtos"
                    )
                );
        }
    }
}

export const productController = new ProductController();
