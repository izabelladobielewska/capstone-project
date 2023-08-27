import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import { locations, companions, weathers } from "@/public/assets/options";
import styled from "styled-components";

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

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCompany([...selectedCompany, value]);
    } else {
      setSelectedCompany(
        selectedCompany.filter((companion) => companion !== value)
      );
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (selectedCompany.length === 0) {
      return alert(
        "You have to select at least one option for company to play!"
      );
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <h3>What is the name of your game?:</h3>
      </label>
      <input
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
          <label>
            <input
              type="checkbox"
              value={companion.value}
              checked={selectedCompany.includes(companion.value)}
              onChange={handleCheckboxChange}
            />
            {companion.desc}
          </label>
        </div>
      ))}
      <h3>In what weather can you play this game?</h3>
      {weathers.map((weather) => (
        <div key={weather.value}>
          <label>
            <input
              type="checkbox"
              value={weather.value}
              checked={selectedCompany.includes(weather.value)}
              onChange={handleCheckboxChange}
            />
            {weather.desc}
          </label>
        </div>
      ))}
      <h3>Where can you play this game?</h3>
      {locations.map((location) => (
        <div key={location.value}>
          <label>
            <input
              type="checkbox"
              value={location.value}
              checked={selectedCompany.includes(location.value)}
              onChange={handleCheckboxChange}
            />
            {location.desc}
          </label>
        </div>
      ))}

      <button type="submit">Sumbit This Game</button>
    </form>
  );
}

const GameInfoTextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 5px;
`;
