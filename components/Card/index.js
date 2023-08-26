import styled from "styled-components";
import Rating from "../Rating";
import AverageRating from "../AverageRating";

export default function Card({ card, mutateCards }) {
  async function handleRating(score) {
    const url = `/api/submitRating?id=${card.id}&rating=${score}`;
    try {
      await fetch(url);
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
        <Rating handleRating={handleRating} />
      </div>
    </Article>
  );
}

const Article = styled.article`
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  height: 70vh;
  background-color: white;
`;

const StyledText = styled.p`
  white-space: pre-wrap;
  color: #210203;
`;
