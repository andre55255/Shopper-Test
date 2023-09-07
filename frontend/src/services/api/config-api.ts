import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    timeout: Number(process.env.REACT_APP_TIMEOUT_API),
});