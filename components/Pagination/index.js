import styled from "styled-components";

export default function Pagination({ handlePrev, handleNext, deckSize }) {
  return (
    <Section>
      <Button onClick={handlePrev}>Prev</Button>
      <span> {deckSize} matching cards </span>
      <Button onClick={handleNext}>Next</Button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const Button = styled.button`
  border-radius: 2px;
  padding: 0.5rem 1rem;
  background-color: "white";
  border: 2px solid #210203;
  border-radius: 5px;
`;
