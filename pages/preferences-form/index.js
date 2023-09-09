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
    <>
      <Head>
        <h3>Your Preferences</h3>
        <StyledText>
          Tell us more about your situation, so that we can suggest matching
          activities.
        </StyledText>
      </Head>
      <Article>
        <StyledSpan>I am bored, and...</StyledSpan>
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
        <StyledSpan>The weather is</StyledSpan>
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
        <StyledSpan>My company is </StyledSpan>{" "}
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
      </Article>
    </>
  );
}
const Head = styled.main`
  padding: 0 1rem 2rem 1rem;
`;

const Article = styled.div`
  margin: 0 1rem;
  height: 88vh;
`;

const OptionsContainer = styled.div`
  display: grid;
  margin: 1rem 0 2rem 0;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 60px;
  gap: 1rem;
`;

const StyledText = styled.p`
  margin: 0px;
`;

const StyledSpan = styled.span`
  font-size: 1rem;
  align-self: center;
  padding: 1rem 0;
  font-weight: bold;
`;

const ButtonSection = styled.div`
  align-self: end;
`;
