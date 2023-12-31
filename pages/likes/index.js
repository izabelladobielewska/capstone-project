import Card from "@/components/Card/index.js";
import Pagination from "@/components/Pagination/index.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import img from "@/public/assets/images/empty-folder.png";

export default function LikedCardsDeck({
  myOwnCards,
  likedCards,
  setLikedCards,
  db,
}) {
  const { data, error, isLoading, mutate } = db;
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCards = (data?.cards || []).filter((card) => {
    return likedCards.includes(card.id);
  });

  if (currentIndex > filteredCards.length - 1) {
    setCurrentIndex(currentIndex - 1);
  }

  /*shuffle will be added here*/
  function handleNext() {
    if (currentIndex === filteredCards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function handlePrev() {
    if (currentIndex === 0) {
      setCurrentIndex(filteredCards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  if (error) return <div>Oops, failed to load the game cards...</div>;
  if (isLoading) return <div>...Loading...</div>;
  if (filteredCards.length <= 0) {
    return (
      <Main>
        <h3>Your Likes</h3>
        <StyledText>
          Oh no, You have no favorites yet,
          <br /> <Lynk href="/">browse the games to find some.</Lynk>
        </StyledText>
        <Ymage src={img} width={120} height={120} alt="Empty folder" />
        <Reference>
          <a
            href="https://www.flaticon.com/free-icons/empty"
            title="empty icons"
          >
            Empty Icon created by smashingstocks - Flaticon
          </a>
        </Reference>
      </Main>
    );
  }
  return (
    <>
      <Head>
        <h3>Your Likes</h3>
        <StyledText>Here you can browse your favorite games 👇</StyledText>
      </Head>
      <Card
        card={filteredCards[currentIndex]}
        mutateCards={mutate}
        likedCards={likedCards}
        setLikedCards={setLikedCards}
        myOwnCards={myOwnCards}
      />
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        deckSize={filteredCards.length}
      />
    </>
  );
}
const Main = styled.main`
  padding: 0rem 1rem;
  height: 92vh;
`;
const Head = styled.main`
  padding: 0rem 1rem 2rem 1rem;
`;
const StyledText = styled.p`
  margin: 0px;
`;
const Lynk = styled(Link)`
  text-decoration: underline 2px #9c77f8;
  text-underline-offset: 5px;
`;
const Ymage = styled(Image)`
  postion: absolute;
  margin-left: calc (55% - 120px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Reference = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 0;
  opacity: 0.5;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
`;
