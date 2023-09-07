import React from "react";
import PublicLayoutPage from "../../components/public-layout";

type AuxProps = {
    children: React.ReactNode;
};

export default function PublicLayout({ children }: AuxProps) {
    return (
        <>
           <PublicLayoutPage>{children}</PublicLayoutPage>
        </>
    );
}
