import GlobalStyle from "../styles";
import Header from "@/components/Header";
import styled from "styled-components";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWeathers, setSelectedWeathers] = useState([]);
  const [selectedCompanions, setSelectedCompanions] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <Component
          {...pageProps}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          selectedWeathers={selectedWeathers}
          setSelectedWeathers={setSelectedWeathers}
          selectedCompanions={selectedCompanions}
          setSelectedCompanions={setSelectedCompanions}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding-top: 4rem;
`;
