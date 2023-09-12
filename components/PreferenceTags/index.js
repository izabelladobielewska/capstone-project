import styled from "styled-components";

export default function PreferenceTags({
  selectedLocations,
  setSelectedLocations,
  selectedCompanions,
  setSelectedCompanions,
  selectedWeathers,
  setSelectedWeathers,
}) {
  return (
    <Main>
      <div>
        <h3>Congrats!</h3>
        <StyledText>
          Turns out you don`t need to look at your phone. Here are some
          alternative activities for you:
        </StyledText>
      </div>
      <Section>
        {selectedLocations.map((location) => (
          <Tag key={location} category="location">
            {location}
            <span
              onClick={() => {
                setSelectedLocations(
                  selectedLocations.filter(
                    (locationInList) => locationInList !== location
                  )
                );
              }}
            >
              &#160; &times;
            </span>
          </Tag>
        ))}
        {selectedWeathers.map((weather) => (
          <Tag key={weather} category="weather">
            {weather}
            <span
              onClick={() => {
                setSelectedWeathers(
                  selectedWeathers.filter(
                    (weatherInList) => weatherInList !== weather
                  )
                );
              }}
            >
              &#160; &times;
            </span>
          </Tag>
        ))}
        {selectedCompanions.map((company) => (
          <Tag key={company} category="company">
            {company}
            <span
              onClick={() => {
                setSelectedCompanions(
                  selectedCompanions.filter(
                    (companionInList) => companionInList !== company
                  )
                );
              }}
            >
              &#160; &times;
            </span>
          </Tag>
        ))}
      </Section>
    </Main>
  );
}
const Main = styled.main`
  padding: 0rem 1rem;
`;
const Tag = styled.div`
  display: inline-block;
  padding: 8px 14px 10px;
  border-radius: 25px;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  font-family: sans-serif;
  background-color: ${(props) => {
    if (props.category === "location") return "#9BBFC2";
    if (props.category === "weather") return "#5DB3FD";
    if (props.category === "company") return "#ECCCBB";
    return "lightgrey";
  }};
`;
const Section = styled.section`
  display: flex;
  font: sans-serif;
  flex-wrap: wrap;
  padding: 0.7rem 0rem;
  justify-content: flex-end;
  gap: 0.8rem;
`;
const StyledText = styled.p`
  margin: 0px;
`;
