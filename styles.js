import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --base-color: #fff;
    --primary-color: #210203;
    --secondary-color: #D0A7E2;
    --terciary-color: #37A994;
    purple: #3F0469
  }

  body {
    margin: 0;
    font-family: system-ui;
    width: 100%;
    height: 100%;
    max-width: 375px;
    margin-inline: auto;
    background-color: var(--base-color)
  }
  a {
    color: black;
    text-decoration: none;
  }
h1{
  font-size: 1.5rem;
}
  h3 {
    padding: 1rem 0 0.5rem 0;
  }
  
`;
