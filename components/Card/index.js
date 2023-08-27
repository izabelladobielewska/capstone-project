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
    <Article>
      <div>
        <div>
          <h2>{card.name}</h2>
          <AverageRating ratings={card.ratings} />
        </div>
        <h3>Prepare:</h3>
        <StyledText>{card.prepare}</StyledText>
        <h3>How to Play:</h3>
        <StyledText>{card.howToPlay}</StyledText>
        <h3>Rules:</h3>
        <StyledText>{card.rules}</StyledText>
        <Rating handleRating={handleRating} rating={rating} />
      </div>
    </Article>
  );
}

const Article = styled.article`
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  height: 60vh;
  background-color: white;
`;

const StyledText = styled.p`
  white-space: pre-wrap;
  color: #210203;
`;
