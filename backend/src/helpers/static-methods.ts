import { ApiResponseDto } from "../dtos/api-response.dto";
import { ResultDto } from "../dtos/result-dto";

export const buildMessageError = (place: string, error: string) => {
    return `Erro em ${place}, ex: ${error}`;
};

export const buildApiResponse = (
    statusCode: number,
    message?: string | any,
    object?: object | Object | null
) => {
    const resp: ApiResponseDto = {
        statusCode,
        message,
        object,
    };

    return resp;
};

export const buildResult = (
    success: boolean,
    message: string,
    object?: object | Object | null
) => {
    const res: ResultDto = {
        success,
        message,
        object,
    };

    return res;
};

export const isNumber = (val: string): boolean => {
    try {
        return !isNaN(Number(val));
    } catch (ex) {
        return false;
    }
}