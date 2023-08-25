import Link from "next/link";
import styled from "styled-components";
import { PreferencesIcon } from "@/public/assets/images/preferences-icon";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  return (
    <Nav>
      <BrandLink href="/" pathName={pathName}>
        <h1>Endstagram</h1>
      </BrandLink>
      <PreferenceLink href="/preferences-form" pathName={pathName}>
        <PreferencesIcon
          alt="link to preferences page"
          color="#6741d9"
          width="2rem"
          height="2rem"
        />
      </PreferenceLink>
    </Nav>
  );
}

const Nav = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  justify-items: center;
  align-items: start;
  background-color: #f3f0ff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
`;
const BrandLink = styled(Link)`
  grid-column: 3 / span 2;
  place-self: center;
  color: #3F0469
  background-color: transparent;
  border: none;
  margin: 0.5em 1em 0.5em 0;
  padding: 0;
  text-decoration: none;
  &:active {
    opacity: 0.5
  }
  transition: 1s
`;
const PreferenceLink = styled(Link)`
  grid-column: 6;
  place-self: center;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: none;

  svg {
    opacity: ${(props) =>
      props.pathName === "/preferences-form" ? "0.5" : "1"};
    transition: 1s;
  }
`;
