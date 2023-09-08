import Card from "@/components/Card/index.js";
import Pagination from "@/components/Pagination/index.js";
import PreferenceTags from "@/components/PreferenceTags/index.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CardDeck({
  selectedLocations,
  selectedWeathers,
  selectedCompanions,
  setSelectedCompanions,
  setSelectedLocations,
  setSelectedWeathers,
  likedCards,
  setLikedCards,
  myOwnCards,
  db,
}) {
  const router = useRouter();
  const { data, error, isLoading, mutate } = db;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (router.query.cardId) {
      const newIndex = db.data?.cards.findIndex(
        (card) => card.id === router.query.cardId
      );
      if (newIndex > -1) {
        setCurrentIndex(newIndex);
      }
    }
  }, [db.data, router.query.cardId]);

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

  if (filteredCards.length && currentIndex > filteredCards.length - 1) {
    setCurrentIndex(filteredCards.length - 1);
  }

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
  if (error) return <div>Oops, failed to load the game cards...</div>;
  if (isLoading) return <div>...Loading...</div>;
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
      <Card
        card={filteredCards[currentIndex]}
        mutateCards={mutate}
        likedCards={likedCards}
        setLikedCards={setLikedCards}
        myOwnCards={myOwnCards}
      />
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        deckSize={filteredCards.length}
      />
    </>
  );
}
