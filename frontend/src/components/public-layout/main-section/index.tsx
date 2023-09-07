import { MainStyled } from "./styled";
import { ReactNode } from "react";

type MainSectionProps = {
    isOpen: boolean;
    children: ReactNode;
}

export default function MainSection({ isOpen, children }: MainSectionProps) {
    return (
        <MainStyled open={isOpen}>
            {children}
        </MainStyled>
    );
}