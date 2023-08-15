import styled from "styled-components";

export default function Card({ card }) {
  return (
    <Article className="game-card">
      <div>
        <h2>{card.name}</h2>
        <h3>Prepare:</h3>
        <StyledText>{card.prepare}</StyledText>
        <h3>How to Play:</h3>
        <StyledText>{card.howToPlay}</StyledText>
        <h3>Rules:</h3>
        <StyledText>{card.rules}</StyledText>
      </div>
    </Article>
  );
}

const Article = styled.article`
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  height: 80vh;
  overflow-y: auto;
`;

const StyledText = styled.p`
  white-space: pre-wrap;
`;
