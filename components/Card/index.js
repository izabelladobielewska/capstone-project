import styled from "styled-components";
import Rating from "../Rating";
import AverageRating from "../AverageRating";
import { useState, useEffect } from "react";
import LikeButton from "../LikeButton";

export default function Card({ card, mutateCards, likedCards, setLikedCards }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(0);
  }, [card.id]);

  async function handleRating(score) {
    const url = "/api/submitRating";
    try {
      setRating(score);
      await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: card.id,
          rating: score,
        }),
      });
      mutateCards();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Main>
      <Article>
        <CardHead>
          <RatingDisplay>
            <AverageRating ratings={card.ratings} />
          </RatingDisplay>
          <CardName>
            <h2>{card.name}</h2>
          </CardName>
          <Likes>
            <LikeButton
              cardId={card.id}
              likedCards={likedCards}
              setLikedCards={setLikedCards}
              alt="link to my likes page"
              // color="black"
              // width="1.7rem"
              // height="1.7rem"
            />
          </Likes>
        </CardHead>
        <CardBody>
          <h3>Prepare:</h3>
          <StyledText>{card.prepare}</StyledText>
          <h3>How to Play:</h3>
          <StyledText>{card.howToPlay}</StyledText>
          <h3>Rules:</h3>
          <StyledText>{card.rules}</StyledText>
        </CardBody>
        <RatingFooter>
          <Rating handleRating={handleRating} rating={rating} />
        </RatingFooter>
      </Article>
    </Main>
  );
}
const Main = styled.main`
  padding: 0rem 1rem;
`;
const CardHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 60% auto;
  align-items: center;
  border-bottom: 0.1rem solid black;
`;
const RatingDisplay = styled.div`
  padding: 1rem;
`;

const CardName = styled.div`
  grid-column: 2;
  text-align: center;
  border-left: 0.1rem solid black;
  border-right: 0.1rem solid black;
  padding: 1.32rem 1rem;
`;
const Likes = styled.div`
  grid-column: 3;
  place-self: center;
  padding: 1rem;
`;

const Article = styled.article`
  box-shadow: 7px 7px 0px #f3c3a8;
  border-radius: 10px;
  overflow-y: auto;
  height: 66vh;
  background-color: white;
  border: 0.1rem solid black;
`;

const CardBody = styled.div`
  padding: 0px 20px 20px 20px;
`;
const StyledText = styled.p`
  white-space: pre-wrap;
  color: #210203;
`;
const RatingFooter = styled.div`
  border-top: 0.1rem solid black;
  padding: 1rem;
`;
