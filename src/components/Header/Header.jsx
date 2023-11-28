import { BurgerSvg, StyledHeader } from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { useState } from "react";
import NavigationMenu from "components/NavigationMenu/NavigationMenu";
import { Nav } from "components/NavigationMenu/NavigationMenu.styled";
import { linkSettings } from "constants/constants";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const toggleNav = () => {
    setIsOpenMenu((isOpen) => !isOpen);
  };

  return (
    <>
      {isOpenMenu && <NavigationMenu toggleNav={toggleNav} />}
      <StyledHeader>
        {!isDesktop ? (
          <BurgerSvg onClick={toggleNav} />
        ) : (
          <Nav>
            <Link to="about" {...linkSettings}>
              About me
            </Link>

            <Link to="skills" {...linkSettings}>
              Skills
            </Link>
            <Link to="projects" {...linkSettings}>
              Projects
            </Link>
            <Link to="socialMedia" {...linkSettings}>
              My Social Media
            </Link>
          </Nav>
        )}
      </StyledHeader>
    </>
  );
};

export default Header;
