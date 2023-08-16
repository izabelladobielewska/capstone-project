import styled from "styled-components";

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
  background-color: ${(props) => (props.selected ? "peach" : "grey")};
`;
