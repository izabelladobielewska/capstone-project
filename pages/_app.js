import GlobalStyle from "../styles";
import Header from "@/components/Header";
import styled from "styled-components";
import { useState } from "react";
import PreferenceTags from "@/components/PreferenceTags";

export default function App({ Component, pageProps }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWeathers, setSelectedWeathers] = useState([]);
  const [selectedCompanions, setSelectedCompanions] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <PreferenceTags
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          selectedCompanions={selectedCompanions}
          setSelectedCompanions={setSelectedCompanions}
          selectedWeathers={selectedWeathers}
          setSelectedWeathers={setSelectedWeathers}
        />
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
  margin: 1rem;
`;
