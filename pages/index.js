import cards from "../public/assets/cards.js";
import Card from "@/components/Card/index.js";
import Pagination from "@/components/Pagination/index.js";
import PreferenceTags from "@/components/PreferenceTags/index.js";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CardDeck({
  selectedLocations,
  selectedWeathers,
  selectedCompanions,
  setSelectedCompanions,
  setSelectedLocations,
  setSelectedWeathers,
}) {
  const { data, error, isLoading } = useSWR("/api/getAll", fetcher);

  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredCards = (data?.cards || []).filter((card) => {
    let isAGoodGameSuggestion = true;

    if (selectedLocations.length > 0) {
      isAGoodGameSuggestion = card.location.some((locationICanPlayThisGameIn) =>
        selectedLocations.includes(locationICanPlayThisGameIn)
      );
      if (!isAGoodGameSuggestion) return false;
    }
    if (selectedWeathers.length > 0) {
      isAGoodGameSuggestion = card.weather.some((weatherICanPlayThisGameIn) =>
        selectedWeathers.includes(weatherICanPlayThisGameIn)
      );
      if (!isAGoodGameSuggestion) return false;
    }
    if (selectedCompanions.length > 0) {
      isAGoodGameSuggestion = card.company.some((companyICanPlayThisGameWith) =>
        selectedCompanions.includes(companyICanPlayThisGameWith)
      );
      if (!isAGoodGameSuggestion) return false;
    }

    return isAGoodGameSuggestion;
  });

  /*shuffle will be added here*/
  function handleNext() {
    if (currentIndex === filteredCards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function handlePrev() {
    if (currentIndex === 0) {
      setCurrentIndex(filteredCards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  if (error) return <div>failed to load game cards...</div>;
  if (isLoading) return <div>loading...</div>;
  if (filteredCards.length <= 0) {
    return <p> Oh no, no cards that fit your preferences. </p>;
  }
  return (
    <>
      <PreferenceTags
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        selectedCompanions={selectedCompanions}
        setSelectedCompanions={setSelectedCompanions}
        selectedWeathers={selectedWeathers}
        setSelectedWeathers={setSelectedWeathers}
      />
      <Card card={filteredCards[currentIndex]} />
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        deckSize={filteredCards.length}
      />
    </>
  );
}
