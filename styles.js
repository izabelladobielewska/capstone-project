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

  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 414px;
    margin-inline: auto;
    background: rgb(106, 70, 252);
    background: radial-gradient(
      circle,
      rgba(106, 70, 252, 0.1545211834733894) 0%,
      rgba(255, 223, 223, 0.19653799019607843) 53%,
      rgba(255, 255, 255, 0.07328869047619047) 100%
    );
    }
  a {
    color: black;
    text-decoration: none;
  }
  p, span {
    font-family: SF Pro Text;
    line-height: 1.3rem;
    font-size: 0.95rem;
  }
h1{
  font-size: 1.5rem;
  font-family: Bodoni;

}
h2 {
  font-family: SF Pro Text;
}

h3 {
  padding: 1rem 0 0.5rem 0;
  font-family: SF Pro Text;
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
  margin-right: 0.5rem;
  cursor: pointer;
  &:checked {
    background-color: #8447ff;
    border-color: #8447ff;
    color: white;
  }
`;
export const SubmitButton = styled.button`
  margin-top: 1rem;
  letter-spacing: 0.05em;
  border-radius: 3rem;
  border: none;
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #8447ff;
  color: white;
  font-size: 1rem;
  font-weight: light;
`;
