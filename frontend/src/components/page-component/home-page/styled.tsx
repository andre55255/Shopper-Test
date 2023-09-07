import { styled } from "styled-components";
import { StyledComponentProps } from "../../../types/styled-component-props";

export const JumbotronStyled = styled.div<StyledComponentProps>`
    text-align: center;
    padding: 3rem 1rem;

    @media screen and (min-width: 768px) {
        padding: 150px 20px;
    }
`;

export const TitleStyled = styled.h1<StyledComponentProps>`
    font-size: 2rem;
    color: ${props => props.theme.textColor};
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
`;

export const SubtitleStyled = styled.p<StyledComponentProps>`
    font-size: 16px;
    color: ${props => props.theme.textMenuColor};
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
        margin-bottom: 40px;
    }
`;

export const LinkPortfolioStyled = styled.a<StyledComponentProps>`
    font-size: 16px;
    color: #02D890;
    transition: all .3s;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
    
    &:hover {
        color: #02f5a4;
    }
`