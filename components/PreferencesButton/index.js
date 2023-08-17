import styled from "styled-components";
import styles from "@/styles";

export default function PreferencesButton({
  value,
  selectedPreferences,
  setPreferences,
}) {
  function handleClick() {
    if (selectedPreferences.includes(value)) {
      setPreferences(
        selectedPreferences.filter((preference) => preference !== value)
      );
    } else {
      setPreferences([...selectedPreferences, value]);
    }
  }
  return (
    <Button
      onClick={handleClick}
      selected={selectedPreferences.includes(value)}
    >
      {value}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(props) => (props.selected ? "#D0A7E2" : "transparent")};
  border-radius: 3px;
  border: 2px solid #d0a7e2;
  color: #210203;
  margin: 0.5em 1em;
  padding: 1em;
`;
