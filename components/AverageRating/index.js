import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function AverageRating({ ratings }) {
  const avgRating = !ratings
    ? 0
    : ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  return (
    <Rating>
      <FontAwesomeIcon icon={faStar} />
      {avgRating > 0 ? (
        <span> {avgRating.toFixed(1)}</span>
      ) : (
        <span> &#8212;</span>
      )}
    </Rating>
  );
}

const Rating = styled.span`
  float: right;
`;
