import HeaderWrapper from "./header-wrapper";
import HeaderAvatar from "./header-avatar";

import { ContainerIconTheme, LabelHeaderNameStyled } from "./header-wrapper/styled";
import { useTheme } from "../../../hooks/use-theme";
import { FiMoon, FiSun } from "react-icons/fi";

export default function HeaderMenu() {
    const { theme, themeToggler } = useTheme();

    const handleTheme = () => {
        themeToggler();
        window.location.reload();
    };

    return (
        <>
            <HeaderWrapper>
                <LabelHeaderNameStyled>Olá, amigo</LabelHeaderNameStyled>
                <ContainerIconTheme>
                    {theme === "dark" ? (
                        <FiMoon onClick={handleTheme} />
                    ) : (
                        <FiSun onClick={handleTheme} />
                    )}
                </ContainerIconTheme>
                <HeaderAvatar />
            </HeaderWrapper>
        </>
    );
}
