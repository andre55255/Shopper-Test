import SidebarWrapper from "./sidebar-wrapper";
import LogoDetails from "./logo-details";
import SidebarNavList from "./sidebar-nav-list";
import SidebarListItem from "./sidebar-list-item";
import { menusAside } from "../../../helpers/menus";

type AsideMenuProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

export default function AsideMenu({ isOpen, toggleSidebar }: AsideMenuProps) {
    return (
        <SidebarWrapper isOpen={isOpen}>
            <LogoDetails isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <SidebarNavList>
                {menusAside.map((item) => (
                    <SidebarListItem
                        key={item.label}
                        href={item.href}
                        Icon={item.Icon}
                        isOpen={isOpen}
                        label={item.label}
                    />
                ))}
            </SidebarNavList>
        </SidebarWrapper>
    );
}
