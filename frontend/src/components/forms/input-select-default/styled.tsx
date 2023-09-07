import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const SelectWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export const SelectField = styled.select<StyledComponentProps>`
    padding: 0.3rem;
    width: 100%;
    background-color: ${props => props.theme.contentBackground};
    border: 1px solid #cccccc;
    outline: none;
    font-size: .8rem;
    border-radius: 5px;
    color:  ${props => props.theme.textColor};
    cursor: pointer;
    appearance: none;

    &:focus {
        border-color: #00aaff;
    }
`;

export const ArrowIcon = styled.span<StyledComponentProps>`
    position: absolute;
    top: 50%;
    right: 10px;
    font-size: .8rem;
    transform: translateY(-50%);
    color: ${props => props.theme.textColor};
`;