import { useState, ReactNode } from "react";
import AsideMenu from "./aside-menu";
import MainSection from "./main-section";
import HeaderMenu from "./header-menu";

type PrivateLayoutPageProps = {
    children: ReactNode;
};

export default function PublicLayoutPage({
    children,
}: PrivateLayoutPageProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <HeaderMenu />
            <AsideMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <MainSection isOpen={isOpen}>{children}</MainSection>
        </>
    );
}
