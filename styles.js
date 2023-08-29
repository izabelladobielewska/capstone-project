import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
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
export const StyledCheckboxLabel = styled.label`
  line-height: 1.5rem;
  font-size: 1rem;
`;
export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  vertical-align: text-bottom;
  width: 1rem;
  height: 1rem;
  border: 1px solid #8447ff;
  border-radius: 4px;
  margin-right: 0.5rem; /* Space between the checkbox and label */
  cursor: pointer;
  &:checked {
    background-color: #8447ff;
    border-color: #8447ff; /* Border color when checked */
    color: white;
  }
`;
