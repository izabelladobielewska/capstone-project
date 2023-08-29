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
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 1rem;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;
`;
