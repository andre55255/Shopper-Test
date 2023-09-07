import { IconType } from "react-icons";
import {
    SidebarIconStyled,
    SidebarLinksNameStyled,
    SidebarListItemStyled,
    SidebarLinkStyled,
    SidebarTooltipStyled,
} from "./styled";

import { useState } from "react";

type SidebarListItemProps = {
    href: string;
    Icon: IconType;
    isOpen: boolean;
    label: string;
};

export default function SidebarListItem({
    href,
    Icon,
    isOpen,
    label,
}: SidebarListItemProps) {
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

    const toggleTooltipVisible = () => setIsTooltipVisible(!isTooltipVisible);

    return (
        <SidebarListItemStyled>
            <SidebarLinkStyled to={href}>
                <SidebarIconStyled
                    onMouseEnter={toggleTooltipVisible}
                    onMouseLeave={toggleTooltipVisible}
                >
                    {<Icon />}
                </SidebarIconStyled>
                <SidebarLinksNameStyled open={isOpen}>
                    {label}
                </SidebarLinksNameStyled>
            </SidebarLinkStyled>
            <SidebarTooltipStyled className={isTooltipVisible ? "tooltip-visible" : ""}>{label}</SidebarTooltipStyled>
        </SidebarListItemStyled>
    );
}
