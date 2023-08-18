import GlobalStyle from "../styles";
import Header from "@/components/Header";
import styled from "styled-components";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [selectedLocations, setSelectedLocations] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <ul>
          {selectedLocations.map((location) => (
            <li key={location}>{location}</li>
          ))}
        </ul>
        <Component
          {...pageProps}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
        />
      </Main>
    </>
  );
}

const Main = styled.main``;
