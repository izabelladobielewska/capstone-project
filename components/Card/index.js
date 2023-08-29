import styled from "styled-components";
import Rating from "../Rating";
import AverageRating from "../AverageRating";
import { useState, useEffect } from "react";

export default function Card({ card, mutateCards }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(0);
  }, [card.id]);

  async function handleRating(score) {
    const url = "/api/submitRating";
    try {
      setRating(score);
      await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: card.id,
          rating: score,
        }),
      });
      mutateCards();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Main>
      <Article>
        <CardHead>
          <h2>{card.name}</h2>
          <AverageRating ratings={card.ratings} />
        </CardHead>
        <CardBody>
          <h3>Prepare:</h3>
          <StyledText>{card.prepare}</StyledText>
          <h3>How to Play:</h3>
          <StyledText>{card.howToPlay}</StyledText>
          <h3>Rules:</h3>
          <StyledText>{card.rules}</StyledText>
          <Rating handleRating={handleRating} rating={rating} />
        </CardBody>
      </Article>
    </Main>
  );
}
const Main = styled.main`
  padding: 0rem 1rem;
`;
const CardHead = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  align-items: center;
  // background: #f3f0ff;
  padding: 1rem;
  border-bottom: 0.1rem solid black;
`;
const Article = styled.article`
  box-shadow: 7px 7px 0px #f3c3a8;
  border-radius: 10px;
  overflow-y: auto;
  height: 66vh;
  background-color: white;
  border: 0.1rem solid black;
`;
const CardBody = styled.div`
  padding: 0px 20px;
`;
const StyledText = styled.p`
  white-space: pre-wrap;
  color: #210203;
`;
