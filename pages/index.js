import Header from "@/components/Header/index.js";
import cards from "../public/assets/cards.js";
import Card from "@/components/Card/index.js";
import Pagination from "@/components/Pagination/index.js";
import styled from "styled-components";
import { useState } from "react";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <Main>
      <Header />
      <Card card={cards[currentIndex]} />
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />
    </Main>
  );
}

const Main = styled.main`
  margin: 20px 20vw;
`;
