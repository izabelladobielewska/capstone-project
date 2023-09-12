import Link from "next/link";
import styled from "styled-components";
import { PreferencesIcon } from "@/public/assets/images/preferences-icon";
import { usePathname } from "next/navigation";
import { AddIcon } from "@/public/assets/images/add-icon";
import { faHeart as heartUnselected } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  const pathName = usePathname();

  return (
    <Nav>
      <AddLink href="/add-game" pathname={pathName}>
        <AddIcon
          alt="add a new game"
          color="black"
          width="1.7rem"
          height="1.7rem"
        />
      </AddLink>
      <BrandLink href="/" pathname={pathName}>
        <h1>Endstagram</h1>
      </BrandLink>
      <LikesLink href="/likes">
        <LikeIcon alt="link to my likes" icon={heartUnselected} />
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
  background-color: #F1ECFE;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  @media only screen and (min-width: 415px) {
    width: 414px;`;

const BrandLink = styled(Link)`
  grid-column: 4 / span 2;
  color: #2d2a32;
  letter-spacing: 1px;
  place-self: center;
  background-color: transparent;
  border: none;
  margin: 0.5em 0em 0.5em 0;
  padding: 0;
  text-decoration: none;
  transition: 0.3s;
  &:active {
    h1 {
      color: #f07054;
    }
  }
`;
const AddLink = styled(Link)`
  grid-column: 1;
  place-self: center;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: none;
  &:active {
    svg {
      fill: #f07054;
    }
  }
`;
const LikesLink = styled(Link)`
  grid-column: 7;
  place-self: center;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: none;
  &:active {
    color: #f07054;
  }
`;
const PreferenceLink = styled(Link)`
  grid-column: 8;
  place-self: center;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: none;
  &:active {
    svg {
      fill: #f07054;
    }
  }
`;
const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
`;
