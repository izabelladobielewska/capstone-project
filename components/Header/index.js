import Link from "next/link";
import styled from "styled-components";
import { PreferencesIcon } from "@/public/assets/images/preferences-icon";
import { usePathname } from "next/navigation";
import { LikesIcon } from "@/public/assets/images/likes-icon";
import { AddIcon } from "@/public/assets/images/add-icon";

export default function Header() {
  const pathName = usePathname();
  return (
    <Nav>
      <AddLink href="/add-game" pathname={pathName}>
        <AddIcon
          alt="add a new game"
          color="black"
          width="1.7rem"
          height="1.rem"
        />
      </AddLink>
      <BrandLink href="/" pathname={pathName}>
        <h1>Endstagram</h1>
      </BrandLink>
      <LikesLink href="/my-likes" pathname={pathName}>
        <LikesIcon
          alt="link to my likes page"
          color="black"
          width="1.7rem"
          height="1.rem"
        />
      </LikesLink>
      <PreferenceLink href="/preferences-form" pathname={pathName}>
        <PreferencesIcon
          alt="link to preferences page"
          color="black"
          width="1.7rem"
          height="1.7rem"
        />
      </PreferenceLink>
    </Nav>
  );
}

const Nav = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  grid-column: 4 / span 2;
  place-self: center;
  // color: #3f0469;
  background-color: transparent;
  border: none;
  margin: 0.5em 0em 0.5em 0;
  padding: 0;
  text-decoration: none;
  &:active {
    opacity: 0.5;
  }
  transition: 1s;
`;
const AddLink = styled(Link)`
  grid-column: 1;
  place-self: center;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: none;
`;
const LikesLink = styled(Link)`
  grid-column: 7;
  place-self: center;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: none;
`;
const PreferenceLink = styled(Link)`
  grid-column: 8;
  place-self: center;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: none;

  svg {
    opacity: ${(props) =>
      props.pathname === "/preferences-form" ? "0.5" : "1"};
    transition: 1s;
  }
`;
