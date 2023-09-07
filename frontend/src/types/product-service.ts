export type UploadFileResponse = {
    code: number;
    name: string;
    costPrice: number;
    currentPrice: number;
    newPrice: number;
    isInvalid: boolean;
    errorDs?: string[] | null;
};

export type ProductUpdateType = {
    code: number;
    newPrice: number;
}