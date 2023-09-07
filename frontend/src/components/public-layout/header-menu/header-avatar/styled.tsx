import { styled } from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component-props";

export const ContainerAvatar = styled.div<StyledComponentProps>`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colorBackgroundAsideMenu};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    margin-left: 10px;
    transition: all 0.2s;

    &:hover {
        background-color: #333;
    }

    &:hover .dropdown-menu {
        display: block;
    }
`;

export const AvatarSpan = styled.span<StyledComponentProps>`
    font-size: 1.4rem;
    color: ${(props) => props.theme.colorTextAsideMenu};
    font-weight: 200;
`;