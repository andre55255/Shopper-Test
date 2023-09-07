import { ReactNode } from "react";
import { HeaderWrapperStyled } from "./styled";

type HeaderWrapperProps = {
    children: ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
    return (
        <HeaderWrapperStyled>
            {children}
        </HeaderWrapperStyled>
    );
}