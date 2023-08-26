import { faStar as starUnselected } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSelected } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { styled } from "styled-components";

export default function Rating({ handleRating }) {
  const ratings = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);

  async function onClickRating(score) {
    handleRating(score);
    setRating(score);
  }

  return (
    <RatingWrapper>
      {ratings.map((score) => (
        <RatingButton
          key={score}
          icon={rating < score ? starUnselected : starSelected}
          onClick={() => onClickRating(score)}
        />
      ))}
    </RatingWrapper>
  );
}

const RatingWrapper = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 0.5rem;
`;

const RatingButton = styled(FontAwesomeIcon)`
  margin: 0 0.4rem;
`;