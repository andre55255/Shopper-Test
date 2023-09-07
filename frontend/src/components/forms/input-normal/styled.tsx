import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const FormGroup = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const Label = styled.label<StyledComponentProps>`
    align-self: flex-start;
    margin-bottom: 0.2rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: ${(props) => props.theme.colorLabelForm};
`;

export const Input = styled.input<StyledComponentProps>`
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 0.9rem;
    outline: none;
    color: ${(props) => props.theme.colorLabelForm};
`;

export const FormHelperError = styled.small<StyledComponentProps>`
    font-size: 0.8rem;
    color: #ff6347;
    align-self: flex-start;
`;
