import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { UploadFileResponse } from "../../types/product-service";
import { requestClient } from "../api/request-client";

export const handleUploadFileProducts = async (
    data: FormData
): Promise<APIResponse<UploadFileResponse[]>> => {
    try {
        const resultReq = await requestClient<UploadFileResponse[]>({
            url: endpointsApi.product.file,
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            message:
                "Ops, falha ao executar rotina de upload de arquivo para api. Desculpe-nos pelo transtorno",
            statusCode: 500,
        };
    }
};
