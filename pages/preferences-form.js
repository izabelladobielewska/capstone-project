import PreferencesButton from "@/components/PreferencesButton";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function PreferencesForm({
  selectedLocations,
  setSelectedLocations,
  selectedWeathers,
  setSelectedWeathers,
  selectedCompanions,
  setSelectedCompanions,
}) {
  const router = useRouter();
  const locations = [
    { text: "I'm living my best life on a boat", value: "boat" },
    { text: "I'm in a forest", value: "forest" },
    { text: "I'm in a city", value: "city" },
    { text: "I'm in the mountains", value: "mountains" },
  ];

  const weathers = [
    { text: "sunny, warm, not too bad", value: "sunny" },
    { text: "rainy", value: "rainy" },
    { text: "wuthering heights", value: "windy" },
    { text: "cloudy", value: "cloudy" },
  ];

  const companions = [
    { text: "just me", value: "alone" },
    { text: "1 person + me", value: "me + 1" },
    { text: "dog", value: "dog" },
    { text: "more people", value: "more people" },
  ];

  function submitPreferences() {
    router.push("/");
  }

  return (
    <>
      <>
        <StyledText>I am bored, and...</StyledText>
        {locations.map((location, i) => (
          <PreferencesButton
            key={location.value}
            preference={location}
            selectedPreferences={selectedLocations}
            setPreferences={setSelectedLocations}
          />
        ))}
        <StyledText>The weather is</StyledText>
        {weathers.map((weather, i) => (
          <PreferencesButton
            key={weather.value}
            preference={weather}
            selectedPreferences={selectedWeathers}
            setPreferences={setSelectedWeathers}
          />
        ))}
        <StyledText>My company is </StyledText>
        {companions.map((company, i) => (
          <PreferencesButton
            key={company.value}
            preference={company}
            selectedPreferences={selectedCompanions}
            setPreferences={setSelectedCompanions}
          />
        ))}
      </>
      <section>
        <button onClick={submitPreferences}>Show matching games!</button>
      </section>
    </>
  );
}

const StyledText = styled.p`
  font-size: 1rem;
  padding-top: 1rem;
  font-weight: normal;
  font-color: "#3f0469";
`;
