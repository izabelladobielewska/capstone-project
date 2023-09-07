import styled from "styled-components";

export default function PreferencesButton({
  preference,
  selectedPreferences,
  setPreferences,
  textKey = "text",
}) {
  function handleClick() {
    if (selectedPreferences.includes(preference.value)) {
      setPreferences(
        selectedPreferences.filter((pref) => pref !== preference.value)
      );
    } else {
      setPreferences([...selectedPreferences, preference.value]);
    }
  }
  return (
    <Button
      onClick={handleClick}
      selected={selectedPreferences.includes(preference.value)}
    >
      {preference[textKey]}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(props) => (props.selected ? "#775CFF" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#6647FF")};
  border-radius: 8px;
  border: 2px solid #775cff;
  font-size: 1rem;
  padding: 0.5em;
`;
// #AA99FF
