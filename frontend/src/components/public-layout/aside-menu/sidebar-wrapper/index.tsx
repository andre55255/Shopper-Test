import { ReactNode } from "react";
import { SidebarWrapperStyled } from "./styled";

type SidebarWrapperProps = {
    isOpen: boolean;
    children: ReactNode;
};

export default function SidebarWrapper({
    isOpen,
    children,
}: SidebarWrapperProps) {
    return (
        <SidebarWrapperStyled open={isOpen}>{children}</SidebarWrapperStyled>
    );
}
