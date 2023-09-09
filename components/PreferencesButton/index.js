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
  background-color: ${(props) => (props.selected ? "#F07054" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#CE3512")};
  font-size: 0.9rem;
  border-radius: 8px;
  border: 2px solid #f07054;
  padding: 0.5em 1rem;
`;
// #AA99FF
// #F07054
// #775cff
