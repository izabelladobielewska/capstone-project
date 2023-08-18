import cards from "../public/assets/cards.js";
import Card from "@/components/Card/index.js";
import Pagination from "@/components/Pagination/index.js";
import { useState } from "react";

export default function HomePage({ selectedLocations }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  /*shuffle will be added here*/
  function handleNext() {
    if (currentIndex === cards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function handlePrev() {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  return (
    <>
      <Card card={cards[currentIndex]} />
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />
    </>
  );
}
// const filteredGames = games.filter((game) => {
//   return game.preferences.some((pref) =>
//     selectedLocations.includes(pref)
//   );
// });
// setFilteredResults(filteredGames);
