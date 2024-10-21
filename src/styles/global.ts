import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    ::after,
    ::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100%;
    }

    body {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
    }
`;

export default GlobalStyles;
