import { Product } from "../database/models/products";
import { GetPackProductsDto } from "../dtos/product-dtos";

export interface ProductsRepositoryInterface {
    getById(id: number): Promise<Product>;

    isPackProduct(productId: number): Promise<boolean>;

    getProductsByPackId(id: number): Promise<GetPackProductsDto[]>;

    updateProduct(product: Product[]): Promise<void>;
}