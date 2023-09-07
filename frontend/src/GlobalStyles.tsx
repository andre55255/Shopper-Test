import { createGlobalStyle } from "styled-components";
import fontInter from "./fonts/Inter-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url(${fontInter});
    }

    /* Estiliza a barra de rolagem */
    ::-webkit-scrollbar {
        width: 8px; /* Largura da barra de rolagem */
    }

    /* Estiliza o polegar da barra de rolagem */
    ::-webkit-scrollbar-thumb {
        background-color: ${(props) =>
            props.theme.primaryColor}; /* Cor do polegar da barra de rolagem */
        border-radius: .2rem; /* Borda arredondada do polegar */
    }

    /* Estiliza a pista da barra de rolagem (opcional) */
    ::-webkit-scrollbar-track {
        background-color: #f0f0f0; /* Cor da pista da barra de rolagem */
    }

    * {
        font-family: Inter, sans-serif;
        transition: 0.25s ease-in-out;
        -webkit-text-size-adjust: none;
    }

    html,
    body,
    div,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    img,
    ul,
    ol,
    li {
        margin: 0;
        padding: 0;
        border: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-size: 1rem;
        background-color: ${(props) => props.theme.bodyBackground};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    ol {
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
    }

    p {
        margin-bottom: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;
