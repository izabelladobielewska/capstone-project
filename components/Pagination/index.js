import styled from "styled-components";

export default function Pagination({ handlePrev, handleNext, deckSize }) {
  return (
    <section>
      <Button onClick={handlePrev}>Prev</Button>
      <span> {deckSize} matching cards </span>
      <Button onClick={handleNext}>Next</Button>
    </section>
  );
}

const Button = styled.button`
  border-radius: 2px;
  margin: 1.7rem;
  padding: 0.5rem 1rem;
  background-color: "white";
  border: 2px solid #210203;
  border-radius: 5px;
`;
