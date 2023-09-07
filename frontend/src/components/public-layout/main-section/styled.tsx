import { styled } from "styled-components";
import { MenuAsideProps } from "../../../types/menu-aside-props";

export const MainStyled = styled.main<MenuAsideProps>`
    position: relative;
    background: ${props => props.theme.bodyBackground};
    top: 0;
    left: ${(props) => (props.open ? "250px" : "78px")};
    width: calc(100% - ${(props) => (props.open ? "250px" : "78px")});
    transition: all 0.5s ease;
    z-index: 2;
`;
