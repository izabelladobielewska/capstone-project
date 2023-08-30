import GlobalStyle from "../styles";
import Header from "@/components/Header";
import styled from "styled-components";
import { useState } from "react";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const db = useSWR("/api/getAll", fetcher);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWeathers, setSelectedWeathers] = useState([]);
  const [selectedCompanions, setSelectedCompanions] = useState([]);
  const [likedCards, setLikedCards] = useState([]);

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
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
          likedCards={likedCards}
          setLikedCards={setLikedCards}
          db={db}
        />
      </Main>
    </SWRConfig>
  );
}

const Main = styled.main`
  padding-top: 4rem;
`;
