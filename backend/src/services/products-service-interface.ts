import { ProductUpdateDto } from "../dtos/product-dtos";
import { ResultDto } from "../dtos/result-dto";

export interface ProductsServiceInterface {
    handleFile(file: Express.Multer.File): Promise<ResultDto>;

    updateProducts(data: ProductUpdateDto[]): Promise<ResultDto>;
}