import PreferencesButton from "@/components/PreferencesButton";
import { useState } from "react";
import styled from "styled-components";

export default function PreferencesForm() {
  const location = [
    "I'm stuck in a boat",
    "I'm in a forest",
    "I'm in a city",
    "I'm in the mountains",
  ];
  const [selectedLocations, setSelectedLocations] = useState([]);

  return (
    <>
      <h3>I am bored, and...</h3>
      {location.map((location, i) => (
        <PreferencesButton
          key={location}
          value={location}
          selectedPreferences={selectedLocations}
          setPreferences={setSelectedLocations}
        />
      ))}
    </>
  );
}
