import styled from "styled-components";

export default function Card({ card }) {
  return (
    <Article>
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
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  background-color: white;
`;

const StyledText = styled.p`
  white-space: pre-wrap;
  color: #210203;
`;
