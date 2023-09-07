export type ProductFileDto = {
    productCode: number;
    newPrice: number;
}

export type ProductFileValidedDto = {
    code: number;
    name: string;
    costPrice: number;
    currentPrice: number;
    newPrice: number;
    isInvalid: boolean;
    errorDs?: string[] | null;
}

export type ProductUpdateDto = {
    code: number;
    newPrice: number;
}

export type GetPackProductsDto = {
    productId: number;
    valueProd: number;
    quantity: number;
}