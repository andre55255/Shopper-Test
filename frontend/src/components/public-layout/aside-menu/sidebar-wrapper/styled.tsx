import { styled } from "styled-components";
import { MenuAsideProps } from "../../../../types/menu-aside-props";

export const SidebarWrapperStyled = styled.aside<MenuAsideProps>`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => (props.open ? "250px" : "78px")};
    background: ${props => props.theme.colorBackgroundAsideMenu};
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.5s ease;

    @media (max-width: 420px) {
        width: ${(props) => (props.open ? "100%" : "78px")};
    }
`;