import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Outfit', sans-serif;
    }

    :root {
        --red: #C20000;
        --green: #008224;
        --white: #EEEEEE;
        --gray-1: #D9D9D9;
        --gray-2: #BCBFC7;
        --gray-3: #666665;
        --gray-4: #323B45;
    }

    body {
        background: linear-gradient(75.81deg, var(--gray-3) 0%, var(--gray-2) 89.91%);
        color: var(--gray-4);
        min-height: 100vh;
        min-width: 100%;
    }

    button {
        cursor: pointer;
        border: none;
    }

    a {
        text-decoration: none;
    }

    input {
        border: none;
    }

`;
