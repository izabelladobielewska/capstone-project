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
    <>
      <div>
        <h3>Congrats!</h3>
        <StyledText>
          turns there are actually some analog activities for you. Here are some
          ideas for you::
        </StyledText>
      </div>
      <Section>
        {selectedLocations.map((location) => (
          <Tag key={location} category="location">
            {location + " "}
            <span
              onClick={() => {
                setSelectedLocations(
                  selectedLocations.filter(
                    (locationInList) => locationInList !== location
                  )
                );
              }}
            >
              &times;
            </span>
          </Tag>
        ))}
        {selectedWeathers.map((weather) => (
          <Tag key={weather} category="weather">
            {weather + " "}
            <span
              onClick={() => {
                setSelectedWeathers(
                  selectedWeathers.filter(
                    (weatherInList) => weatherInList !== weather
                  )
                );
              }}
            >
              &times;
            </span>
          </Tag>
        ))}
        {selectedCompanions.map((company) => (
          <Tag key={company} category="company">
            {company + " "}
            <span
              onClick={() => {
                setSelectedCompanions(
                  selectedCompanions.filter(
                    (companionInList) => companionInList !== company
                  )
                );
              }}
            >
              &times;
            </span>
          </Tag>
        ))}
      </Section>
    </>
  );
}
const Tag = styled.div`
  display: inline-block;
  padding: 7px 12px 9px;
  border-radius: 25px;
  font-size: 0.8rem;
  background-color: ${(props) => {
    if (props.category === "location") return "#9BBFC2";
    if (props.category === "weather") return "#5DB3FD";
    if (props.category === "company") return "#ECCCBB";
    return "lightgrey";
  }};
`;
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0.7rem 0;
  justify-content: flex-end;
  gap: 0.8rem;
`;
const StyledText = styled.p`
  margin: 0px;
`;
