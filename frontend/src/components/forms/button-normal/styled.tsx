import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const Button = styled.button<StyledComponentProps>`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryTextColorBtn};
    border: none;
    border-radius: 5px;
    padding: .7rem 1.2rem;
    width: 100%;
    cursor: pointer;
    font-size: .9rem;
    transition: background-color 0.3s;

    &:disabled {
        background-color: ${props => props.theme.primaryColorHover};
        cursor: not-allowed;
    }

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
    }
`;
