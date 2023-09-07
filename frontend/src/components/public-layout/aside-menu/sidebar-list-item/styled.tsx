import { styled } from "styled-components";
import { MenuAsideProps } from "../../../../types/menu-aside-props";
import { Link } from "react-router-dom";
import { StyledComponentProps } from "../../../../types/styled-component-props";

export const SidebarListItemStyled = styled.li`
    position: relative;
    margin: 8px 0;
    list-style: none;

    .tooltip-visible {
        opacity: 1;
    }
`;

export const SidebarTooltipStyled = styled.span`
    position: absolute;
    top: 0;
    margin-top: 20px;
    left: calc(100% + 20px);
    z-index: 3;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: .8rem;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
    transform: translateY(-50%);
`;

export const SidebarLinkStyled = styled(Link)<StyledComponentProps>`
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background-color: ${props => props.theme.colorBackgroundAsideMenu};
`;

export const SidebarLinksNameStyled = styled.span<MenuAsideProps>`
    color: ${props => props.theme.colorTextAsideMenu};
    font-size: .8rem;
    font-weight: 400;
    white-space: nowrap;
    opacity: ${(props) => (props.open ? "1" : "0")};
    pointer-events: ${(props) => (props.open ? "auto" : "none")};
    transition: 0.4s;

    &:hover {
        text-decoration: underline!important;
    }
`;

export const SidebarIconStyled = styled.div`
    color: ${props => props.theme.colorTextAsideMenu};;
    height: 50px;
    line-height: 50px;
    font-size: 1rem;
    border-radius: 12px;
    margin-right: 0.5rem;
    transition: all .01s!important;

    &:hover {
        font-size: 1.1rem;
    }
`;
