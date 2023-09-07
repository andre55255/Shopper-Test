import { styled } from "styled-components";
import { StyledComponentProps } from "../../../../types/styled-component-props";

export const HeaderWrapperStyled = styled.header<StyledComponentProps>`
    padding: 0.5rem;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.textMenuColor};
    margin-right: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 0;
        padding: 0;
        margin-left: 3rem;
        padding-bottom: 1rem;
    }
`;

export const LabelHeaderNameStyled = styled.span<StyledComponentProps>`
    font-size: 1rem;
    color: ${(props) => props.theme.textMenuColor};
    font-weight: 200;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const ContainerIconTheme = styled.div<StyledComponentProps>`
    margin: 0 1rem;
    font-size: 1.1rem;
    color: ${(props) => props.theme.textMenuColor};

    @media (max-width: 600px) {
        margin-top: 1rem;
    }
`