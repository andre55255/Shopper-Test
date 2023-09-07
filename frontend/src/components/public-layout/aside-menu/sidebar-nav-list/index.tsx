import { SidebarNavListStyled } from "./styled";
import { ReactNode } from "react";

type SidebarNavListProps = {
    children: ReactNode;
};

export default function SidebarNavList({ children }: SidebarNavListProps) {
    return (
        <nav>
            <SidebarNavListStyled>{children}</SidebarNavListStyled>
        </nav>
    );
}
