import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <h1>Endstagram</h1>

        <Link href="/">Home</Link>
  
     
        <Link href="/preferences-form">Preferences</Link>

    </header>
  );
}
const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0.5em 1em;
  padding: 1em;
`;
