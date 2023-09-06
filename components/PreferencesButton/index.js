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
  background-color: ${(props) => (props.selected ? "#D0A7E2" : "transparent")};
  border-radius: 8px;
  border: 2px solid #d0a7e2;
  color: black;
  // margin: 0.5em 1em;
  padding: 0.5em;
`;
