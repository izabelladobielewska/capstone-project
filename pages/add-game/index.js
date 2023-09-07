import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import { locations, companions, weathers } from "@/public/assets/options";
import styled from "styled-components";
import { StyledCheckbox } from "@/styles";
import { StyledCheckboxLabel } from "@/styles";
import { SubmitButton } from "@/styles";
import PreferencesButton from "@/components/PreferencesButton";
export default function AddGame({ db, myOwnCards, setMyOwnCards }) {
  const router = useRouter();

  const cardId = router.query.cardId;
  const cardToEdit = db.data?.cards.find((card) => card.id === cardId);

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: cardToEdit?.name || "",
    prepare: cardToEdit?.prepare || "",
    howToPlay: cardToEdit?.howToPlay || "",
    rules: cardToEdit?.rules || "",
  });
  const [selectedCompany, setSelectedCompany] = useState(
    cardToEdit?.company || []
  );
  const [selectedWeathers, setSelectedWeathers] = useState(
    cardToEdit?.weather || []
  );
  const [selectedLocations, setSelectedLocations] = useState(
    cardToEdit?.location || []
  );

  // function handleSelectButtonChange(value, state, setter) {
  //   if (state.includes(value)) {
  //     setter([...state, value]);
  //   } else {
  //     setter(state.filter((item) => item !== value));
  //   }
  //   console.log(state);
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function storeOwnCards(newId) {
    if (myOwnCards.includes(newId)) return;

    const ownCardIds = [...myOwnCards, newId];
    setMyOwnCards(ownCardIds);
    localStorage.setItem("myOwnCards", JSON.stringify(ownCardIds));
  }

  async function handleSubmit() {
    if (selectedCompany.length === 0) {
      return alert("You have to select at least one of the company options!");
    }
    if (selectedLocations.length === 0) {
      return alert(
        "You have to select at least one option for a location to play in!"
      );
    }
    if (selectedWeathers.length === 0) {
      return alert(
        "You have to select at least one option for a weather to play!"
      );
    }

    if (confirm("Are you happy with your new game?")) {
      const newId = cardId || uid();
      const newGame = {
        ...formData,
        id: newId,
        company: selectedCompany,
        location: selectedLocations,
        weather: selectedWeathers,
      };
      try {
        await fetch("/api/addGame/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGame),
        });
        storeOwnCards(newId);
        router.push({ pathname: "/", query: { cardId: newId } });
        db.mutate();
      } catch (e) {
        console.error(e);
      }
    }
  }
async function handleDelete () {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json";
  },
}
  return (
    <MainForm>
      <Section className={step === 0 ? "active" : "hidden"}>
        <label htmlFor="name">
          <h3>What is the name of your game?:</h3>
        </label>
        <TextInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="prepare">
          <h3>What to prepare:</h3>
        </label>
        <GameInfoTextArea
          id="prepare"
          name="prepare"
          value={formData.prepare}
          onChange={handleChange}
          required
        />
        <label htmlFor="howToPlay">
          <h3>How to play:</h3>
        </label>
        <GameInfoTextArea
          id="howToPlay"
          name="howToPlay"
          width="100%"
          value={formData.howToPlay}
          onChange={handleChange}
          required
        />
        <label htmlFor="rules">
          <h3>Rules:</h3>
        </label>
        <GameInfoTextArea
          id="rules"
          name="rules"
          value={formData.rules}
          onChange={handleChange}
          required
        />
        <ButtonRight>
          <Button onClick={() => setStep(1)}>Next Step &#8594;</Button>
        </ButtonRight>
      </Section>
      <Section className={step === 1 ? "active" : "hidden"}>
        <Button onClick={() => setStep(0)}>&#8592; Back</Button>
        <h3>Does one need company to play this game?</h3>
        <OptionsContainer>
          {companions.map((companion) => (
            <PreferencesButton
              key={companion.value}
              preference={companion}
              selectedPreferences={selectedCompany}
              setPreferences={setSelectedCompany}
              textKey="desc"
            />
          ))}
        </OptionsContainer>

        <h3>In what weather can you play this game?</h3>
        <OptionsContainer>
          {weathers.map((weather) => (
            <PreferencesButton
              key={weather.value}
              preference={weather}
              selectedPreferences={selectedWeathers}
              setPreferences={setSelectedWeathers}
              textKey="desc"
            />
          ))}
        </OptionsContainer>

        <h3>Where can you play this game?</h3>
        <OptionsContainer>
          {locations.map((location) => (
            <PreferencesButton
              key={location.value}
              preference={location}
              selectedPreferences={selectedLocations}
              setPreferences={setSelectedLocations}
              textKey="desc"
            />
          ))}
        </OptionsContainer>
        <SubmitButton onClick={handleSubmit}>Submit This Game</SubmitButton>
      </Section>
    </MainForm>
  );
}
const MainForm = styled.main`
  display: grid;
  height: 92vh;
  grid-template-rows: auto 4rem;
  padding: 1rem;
`;
const ButtonRight = styled.div`
  justify-content: flex-end;
  margin: 10px 0 0;
  grid-row: 2;
`;
const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid #d0a7e2;
  border-radius: 8px;
  background-color: transparent;
  font-size: 1rem;
  resize: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    background-color: rgba(255,255,255,.3)
    border-color: #007BFF;
    box-shadow: 5px 5px 0px rgba(0, 123, 255);
    outline: none;}
`;
const GameInfoTextArea = styled.textarea`
  width: 100%;
  height: 8rem;
  border-radius: 5px;
  padding: 0.5rem 0.5rem;
  box-sizing: border-box;
  border: 1px solid #d0a7e2;
  border-radius: 8px;
  background-color: transparent;
  font-size: 1rem;
  resize: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #8447ff;
    background-color: rgba(255,255,255,.3);
    box-shadow: 5px 5px 0px rgba(0, 123, 255);
    outline: none;

`;

const Section = styled.section`
  &.hidden {
    display: none;
  }
`;
const Button = styled.button`
  padding: 0.8rem 1.2rem;
  grid-row: 2;
  margin-top: 1rem;
  background-color: black;
  border: none;
  border-radius: 8px;
  color: white;
  word-spacing: 3px;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 60px;
  gap: 1rem;
`;
