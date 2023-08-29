import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import { locations, companions, weathers } from "@/public/assets/options";
import styled from "styled-components";
import { StyledCheckbox } from "@/styles";
import { StyledCheckboxLabel } from "@/styles";
import { SubmitButton } from "@/styles";
export default function AddGame() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    prepare: "",
    howToPlay: "",
  });
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [selectedWeathers, setSelectedWeathers] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  function handleCheckboxChange(event, state, setter) {
    const { value, checked } = event.target;
    if (checked) {
      setter([...state, value]);
    } else {
      setter(state.filter((item) => item !== value));
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

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
      const newGame = {
        ...formData,
        id: uid(),
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
        router.push("/");
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <MainForm>
      <form onSubmit={handleSubmit}>
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
        <h3>Does one need company to play this game?</h3>
        {companions.map((companion) => (
          <div key={companion.value}>
            <StyledCheckboxLabel>
              <StyledCheckbox
                type="checkbox"
                value={companion.value}
                checked={selectedCompany.includes(companion.value)}
                onChange={(event) =>
                  handleCheckboxChange(
                    event,
                    selectedCompany,
                    setSelectedCompany
                  )
                }
              />
              {companion.desc}
            </StyledCheckboxLabel>
          </div>
        ))}
        <h3>In what weather can you play this game?</h3>
        {weathers.map((weather) => (
          <div key={weather.value}>
            <StyledCheckboxLabel>
              <StyledCheckbox
                type="checkbox"
                value={weather.value}
                checked={selectedWeathers.includes(weather.value)}
                onChange={(event) =>
                  handleCheckboxChange(
                    event,
                    selectedWeathers,
                    setSelectedWeathers
                  )
                }
              />
              {weather.desc}
            </StyledCheckboxLabel>
          </div>
        ))}
        <h3>Where can you play this game?</h3>
        {locations.map((location) => (
          <div key={location.value}>
            <StyledCheckboxLabel>
              <StyledCheckbox
                type="checkbox"
                value={location.value}
                checked={selectedLocations.includes(location.value)}
                onChange={(event) =>
                  handleCheckboxChange(
                    event,
                    selectedLocations,
                    setSelectedLocations
                  )
                }
              />
              {location.desc}
            </StyledCheckboxLabel>
          </div>
        ))}

        <SubmitButton type="submit">Submit This Game</SubmitButton>
      </form>
    </MainForm>
  );
}
const MainForm = styled.main`
  padding: 1rem;
  background: #fdf7ed;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 0.4682466736694678) 0%,
    rgba(148, 187, 233, 0.41222426470588236) 100%
  );
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
    box-shadow: 0 0 10px rgba(0, 123, 255);
`;
const GameInfoTextArea = styled.textarea`
  width: 100%;
  height: 80px;
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
    box-shadow: 0 0 10px rgba(0, 123, 255);
`;
