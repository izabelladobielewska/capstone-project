import { buildQueries } from "@testing-library/react";
import styled from "styled-components";
import { useState } from "react";

export default function Pagination({ handlePrev, handleNext }) {
  const [game, setGame] = useState();
  return (
    <section>
      <Button onClick={handlePrev}>Prev</Button>
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
