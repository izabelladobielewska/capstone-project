import styled from "styled-components";

export default function Pagination({ handlePrev, handleNext, deckSize }) {
  return (
    <Section>
      <Button onClick={handlePrev}>&#8592; Prev</Button>
      <span> {deckSize} matching cards </span>
      <Button onClick={handleNext}>Next &#8594;</Button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 1rem;
`;
const Button = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: black;
  border: none;
  border-radius: 8px;
  color: white;
  word-spacing: 5px;
`;
