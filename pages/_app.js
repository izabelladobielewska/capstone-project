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
        <ul>
          {selectedLocations.map((location) => (
            <li key={location}>{location}</li>
          ))}
          {selectedWeathers.map((weather) => (
            <li key={weather}>{weather}</li>
          ))}
          {selectedCompanions.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
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

const Main = styled.main``;
