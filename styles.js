import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    width: 100%;
    height: 100%;
    margin-inline: auto;
  }

  :root {
    --base-color: #F2EBE3;
    --primary-color: #210203;
    --secondary-color: #D0A7E2;
    --terciary-color: #37A994;
  }
`;
