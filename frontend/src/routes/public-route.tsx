import { Outlet } from "react-router-dom";
import PublicLayout from "../pages/layout/public-layout";

export const PublicRoute = () => {
    return (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    );
};