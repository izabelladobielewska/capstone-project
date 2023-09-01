import GlobalStyle from "../styles";
import Header from "@/components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const db = useSWR("/api/getAll", fetcher);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedWeathers, setSelectedWeathers] = useState([]);
  const [selectedCompanions, setSelectedCompanions] = useState([]);
  const [likedCards, setLikedCards] = useState([]);

  // code from https://articles.wesionary.team/using-localstorage-with-next-js-a-beginners-guide-7fc4f8bfd9dc
  useEffect(() => {
    if (window?.localStorage) {
      const likedCardsFromStorage =
        JSON.parse(window.localStorage.getItem("likedCards")) || [];

      setLikedCards(likedCardsFromStorage);
    }
  }, []);

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
