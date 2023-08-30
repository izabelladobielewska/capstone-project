import { faHeart as heartUnselected } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSelected } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LikeButton({ likedCards, setLikedCards, cardId }) {
  function handleLikeClick() {
    if (likedCards.includes(cardId)) {
      setLikedCards(
        likedCards.filter(
          (eachCardOnLikeCards) => eachCardOnLikeCards !== cardId
        )
      );
    } else {
      setLikedCards([...likedCards, cardId]);
    }
  }

  return (
    <LikeIcon
      icon={!likedCards.includes(cardId) ? heartUnselected : heartSelected}
      onClick={handleLikeClick}
    />
  );
}
const LikeIcon = styled(FontAwesomeIcon)`
  margin: 0 0.4rem;
`;
