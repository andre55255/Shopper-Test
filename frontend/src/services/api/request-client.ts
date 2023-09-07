import axios, { AxiosError, AxiosRequestConfig, AxiosHeaders } from "axios";
import { api } from "./config-api";
import { APIResponse } from "../../types/api-response";

type RequestProps = {
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
    url: string;
    data?: object | undefined;
    authorization?: string | undefined | null;
    query?: object;
    headers?: any;
};

export async function requestClient<T>(
    requestInfo: RequestProps
): Promise<APIResponse<T>> {
    try {
        const configRequest: AxiosRequestConfig<any> = {};
        configRequest.url = requestInfo.url;
        configRequest.method = requestInfo.method;
        configRequest.data = requestInfo.data;
        configRequest.params = requestInfo.query;
        configRequest.maxBodyLength = Infinity;
        
        if (requestInfo.headers) {
            configRequest.headers = { 
                ...requestInfo.headers
            }
        }

        if (requestInfo.authorization) {
            configRequest.headers = requestInfo.headers
                ? {
                      ...requestInfo.headers,
                      Authorization: "Bearer " + requestInfo.authorization,
                  }
                : {
                      Authorization: "Bearer " + requestInfo.authorization,
                  };
        }
        try {
            const response = await api<APIResponse<T>>(configRequest);
            response.data.statusCode = response.status;
            return response.data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const errorAxios = err as AxiosError;

                let responseData: APIResponse<T> = errorAxios.response
                    ?.data as APIResponse<T>;
                if (!responseData) {
                    responseData = {
                        message:
                            errorAxios.response?.status === 401
                                ? "Não autorizado, faça login novamente"
                                : errorAxios.response?.status === 403
                                ? "Acesso negado"
                                : "Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno",
                    };
                }
                responseData.statusCode = errorAxios.response?.status;
                return responseData;
            }
            throw new Error(
                "Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno" +
                    err
            );
        }
    } catch (err) {
        console.log(err);
        return {
            message:
                "Ops, falha inesperada ao realizar requisição. Desculpe-nos pelo transtorno",
            statusCode: 500,
        };
    }
}
