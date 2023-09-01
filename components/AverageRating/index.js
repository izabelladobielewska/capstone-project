import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function AverageRating({ ratings }) {
  const avgRating = !ratings
    ? 0
    : ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  return (
    <>
      <FontAwesomeIcon icon={faStar} />
      {avgRating > 0 ? (
        <>
          <span> {avgRating.toFixed(1)} </span>
          <Votes> ({ratings.length}) </Votes>
        </>
      ) : (
        <span> &#8212;</span>
      )}
    </>
  );
}
const Votes = styled.p`
  font-size: 0.8rem;
  line-height: 0.9rem;
  color: grey;
`;
