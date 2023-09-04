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
      <StyledHeadline>Set Your Preferences</StyledHeadline>
      <StyledText>I am bored, and...</StyledText>
      <OptionsContainer>
        {locations.map((location, i) => (
          <PreferencesButton
            key={location.value}
            preference={location}
            selectedPreferences={selectedLocations}
            setPreferences={setSelectedLocations}
          />
        ))}
      </OptionsContainer>
      <StyledText>The weather is</StyledText>
      <OptionsContainer>
        {weathers.map((weather, i) => (
          <PreferencesButton
            key={weather.value}
            preference={weather}
            selectedPreferences={selectedWeathers}
            setPreferences={setSelectedWeathers}
          />
        ))}
      </OptionsContainer>
      <StyledText>My company is </StyledText>{" "}
      <OptionsContainer>
        {companions.map((company, i) => (
          <PreferencesButton
            key={company.value}
            preference={company}
            selectedPreferences={selectedCompanions}
            setPreferences={setSelectedCompanions}
          />
        ))}
      </OptionsContainer>
      <ButtonSection>
        <SubmitButton onClick={submitPreferences}>
          Show matching games &#8594;
        </SubmitButton>
      </ButtonSection>
    </Main>
  );
}
const Main = styled.main`
  display: grid;
  height: 92vh;
  grid-template-rows: auto auto auto 4rem;
  padding: 1rem;
`;
const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 60px;
  gap: 1rem;
`;

const StyledText = styled.p`
  font-size: 1rem;
  align-self: center;
  padding: 1rem 0;
  font-weight: bold;
`;

const StyledHeadline = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
`;

const ButtonSection = styled.section`
  align-self: end;
`;
