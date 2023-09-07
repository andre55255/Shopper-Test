import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const ContainerStyled = styled.div<StyledComponentProps>`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
