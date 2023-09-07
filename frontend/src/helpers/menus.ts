import { FiHome, FiLayers } from "react-icons/fi";
import { IconType } from "react-icons";
import { routesPages } from "./routes-pages";

export type MenuProps = {
    href: string;
    Icon: IconType;
    label: string;
};

export const menusAside: MenuProps[] = [
    {
        href: routesPages.home,
        label: "Home",
        Icon: FiHome,
    },
    {
        href: routesPages.upload,
        label: "Upload",
        Icon: FiLayers
    }
];