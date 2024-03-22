import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    border-style, input-security,textarea, button, h1, h2, h3, h4, h5, h6, p, span, a{
        font-family: 'Nunito', sans-serif;
    }

`;
