import { toast, ToastOptions } from "react-toastify";
import { THEME_APPLICATION } from "./constants";

type ShowToastProps = {
    message: string | undefined;
};

export const toastOpt: ToastOptions = {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    theme:
        localStorage.getItem(THEME_APPLICATION) === "dark"
            ? "light"
            : localStorage.getItem(THEME_APPLICATION) === "light"
            ? "dark"
            : "colored",
    pauseOnHover: true,
};

export const showToastError = ({ message }: ShowToastProps) => {
    toast.error(message, toastOpt);
};

export const showToastSuccess = ({ message }: ShowToastProps) => {
    toast.success(message, toastOpt);
};

export const showToastInfo = ({ message }: ShowToastProps) => {
    toast.info(message, toastOpt);
};
