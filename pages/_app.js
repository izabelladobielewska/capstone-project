import GlobalStyle from "../styles";
import Header from "@/components/Header";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <Component {...pageProps} />
      </Main>
    </>
  );
}

const Main = styled.main`
  margin: 20px 20vw;
`;
