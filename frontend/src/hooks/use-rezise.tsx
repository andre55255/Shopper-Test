import { useState, useEffect } from "react";

export function useResize() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.addEventListener("resize", handleResize);
        };
    }, []);

    return { windowWidth, windowHeight };
}
