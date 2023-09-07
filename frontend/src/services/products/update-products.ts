import { endpointsApi } from "../../helpers/endpoints-api";
import { APIResponse } from "../../types/api-response";
import { ProductUpdateType } from "../../types/product-service";
import { requestClient } from "../api/request-client";

export const handleUpdateProductsRequest = async (
    data: ProductUpdateType[]
): Promise<APIResponse<any>> => {
    try {
        const resultReq = await requestClient<any>({
            url: endpointsApi.product.update,
            method: "POST",
            data,
        });
        return resultReq;
    } catch (err) {
        return {
            message:
                "Ops, falha ao executar rotina de atualizar produtos para api. Desculpe-nos pelo transtorno",
            statusCode: 500,
        };
    }
};
