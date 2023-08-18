import cards from "../public/assets/cards.js";
import Card from "@/components/Card/index.js";
import Pagination from "@/components/Pagination/index.js";
import { useState } from "react";

export default function HomePage({ selectedLocations }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredCards = cards.filter((card) => {
    if (selectedLocations.length > 0) {
      return card.location.some((locationICanPlayThisGameIn) =>
        selectedLocations.includes(locationICanPlayThisGameIn)
      );
    }
    return true;
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
  return (
    <>
      <Card card={filteredCards[currentIndex]} />
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />
    </>
  );
}
