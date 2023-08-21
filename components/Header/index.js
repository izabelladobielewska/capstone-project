import _Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">Endstagram</Link>
      </h1>
      <Link href="/preferences-form">Preferences</Link>
    </header>
  );
}
const Link = styled(_Link)`
  background-color: transparent;
  border: none;
  margin: 0.5em 1em 0.5em 0;
  padding: 0;
  text-decoration: none;
`;
