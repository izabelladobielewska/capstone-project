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
`;

// / *
// type="button"
// onClick={() =>
//   setPage((currentPage) => (currentPage === 0 ? 0 : currentPage - 1))
// }
