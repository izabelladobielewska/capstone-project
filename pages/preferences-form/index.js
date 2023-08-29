import PreferencesButton from "@/components/PreferencesButton";
import { useRouter } from "next/router";
import styled from "styled-components";
import { locations, companions, weathers } from "@/public/assets/options";
import { SubmitButton } from "@/styles";
export default function PreferencesForm({
  selectedLocations,
  setSelectedLocations,
  selectedWeathers,
  setSelectedWeathers,
  selectedCompanions,
  setSelectedCompanions,
}) {
  const router = useRouter();

  function submitPreferences() {
    router.push("/");
  }

  return (
    <Main>
      <>
        <StyledHeadline>Set Your Preferences</StyledHeadline>
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
        <SubmitButton onClick={submitPreferences}>
          Show matching games!
        </SubmitButton>
      </section>
    </Main>
  );
}

const StyledText = styled.p`
  font-size: 1rem;
  padding-top: 1rem;
  font-weight: normal;
`;
const Main = styled.main`
  padding: 1rem;
`;
const StyledHeadline = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
`;
