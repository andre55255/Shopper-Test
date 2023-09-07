export type APIResponse<T> = {
    message?: string;
    object?: T | null | undefined;
    statusCode?: number | undefined;
};
