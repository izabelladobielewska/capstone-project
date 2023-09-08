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
    // --base-color: #fff;
    // --primary-color: #210203;
    // --secondary-color: #D0A7E2;
    // --terciary-color: #37A994;
    // purple: #3F0469
  }

  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    margin-inline: auto;
    background: rgb(106, 70, 252);
    background: radial-gradient(
      circle,
      rgba(106, 70, 252, 0.1545211834733894) 0%,
      rgba(255, 223, 223, 0.19653799019607843) 53%,
      rgba(255, 255, 255, 0.07328869047619047) 100%
    );
    @media only screen and (min-width: 415px) {
      width: 414px;
    }
  }
    
 
  a {
    color: #2D2A32;
    text-decoration: none;
  }
  p, span {
    font-family: sans-serif;
    line-height: 1.3rem;
    font-size: 0.95rem;
    color: #2D2A32;
    hyphens: auto;
    overflow-wrap: break-word;
  }
h1{
  font-size: 1.5rem;
  font-family: sans-serif;
color: #2d2a32;
}
h2 {
  font-family: SF Pro Text;
  color: #2d2a32;

}

h3 {
  padding: 1rem 0 0.5rem 0;
  font-family: SF Pro Text;
  color: #2d2a32;

  }  
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  letter-spacing: 0.05em;
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #2d2a32;
  bottom: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: light;
`;
