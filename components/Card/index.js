import styled from "styled-components";
import Rating from "../Rating";
import AverageRating from "../AverageRating";
import { useState, useEffect } from "react";
import LikeButton from "../LikeButton";
import { useRouter } from "next/router";
import { EditIcon } from "@/public/assets/images/edit-icon";
export default function Card({ card, mutateCards, likedCards, setLikedCards }) {
  const router = useRouter();
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

  function handleEdit() {
    router.push(
      {
        pathname: "add-game",
        query: {
          cardId: card.id,
        },
      },
      "edit-game"
    );
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
        <CardFooter>
          <RatingBlock>
            <Rating handleRating={handleRating} rating={rating} />
          </RatingBlock>
          <Edit>
            <EditIcon
              onClick={handleEdit}
              alt="link to edit this card"
              color="black"
              width="1.7rem"
              height="1.7rem"
            />
          </Edit>
        </CardFooter>
      </Article>
    </Main>
  );
}
const Main = styled.main`
  padding: 0rem 1rem;
`;
const CardHead = styled.div`
  display: grid;
  grid-template-columns: auto 60% 60px;
  align-items: center;
  border-bottom: 0.1rem solid black;
`;
const RatingDisplay = styled.div`
  place-self: center;
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
  border-bottom: 0.1rem solid black;
`;

const StyledText = styled.p`
  white-space: pre-wrap;
  color: #210203;
`;

const CardFooter = styled.div`
  display: grid;
  grid-template-columns: auto 60px;
  align-items: center;
`;

const RatingBlock = styled.div`
  place-self: center;
  padding: 1rem;
`;

const Edit = styled.div`
  grid-column: 2;
  place-self: center;
  padding: 1rem;
  border-left: 0.1rem solid black;
`;
