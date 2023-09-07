import { styled } from "styled-components";
import { StyledComponentProps } from "../../types/styled-component-props";

export const TitlePageStyled = styled.h2<StyledComponentProps>`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${props => props.theme.textColor};
    margin-bottom: 3rem;
    vertical-align: middle;
    
    svg {
        margin-right: .5rem;
        cursor: pointer;
    }
`