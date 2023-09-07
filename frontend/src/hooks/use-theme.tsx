import { useState, useMemo } from "react";
import { darkTheme, lightTheme } from "../helpers/theme-styled";
import { THEME_APPLICATION } from "../helpers/constants";

interface UseThemeProps {
    theme: "light" | "dark";
    themeToggler: () => void;
    getTheme: Function;
}

export function useTheme(): UseThemeProps {
    const itemLocalStorage = localStorage.getItem(THEME_APPLICATION);
    if (!itemLocalStorage)
        localStorage.setItem(THEME_APPLICATION, "light");
    
    const newMode = !itemLocalStorage ? 
                    "light" :
                    itemLocalStorage === "light" ?
                    "light" : 
                    "dark";

    const [theme, setTheme] = useState<"light" | "dark">(newMode);

    const themeToggler = () => {
        const newValue = theme === "light" ? "dark" : "light";
        
        localStorage.setItem(THEME_APPLICATION, newValue);
        setTheme(newValue);

        window.location.reload();
    };

    const getTheme = () => theme === "light" ? lightTheme : darkTheme;

    const value = useMemo(() => {
        return ({
            theme, themeToggler, getTheme
        })
    }, [theme]);

    return value;
}
