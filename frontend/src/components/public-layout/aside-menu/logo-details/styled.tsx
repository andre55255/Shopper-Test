import { styled } from "styled-components";
import { MenuAsideProps } from "../../../../types/menu-aside-props";

export const LogoDetailsStyled = styled.div<MenuAsideProps>`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    img {
        width: 3rem;
        opacity: ${(props) => (props.open ? "1" : "0")};
    }

    svg {
        transition: all 0.5s ease;
        color: ${props => props.theme.colorTextAsideMenu};
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            font-size: 1.7rem;
        }
    }
`;