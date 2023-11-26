import { FaLaptopCode } from "react-icons/fa6";
import { ReactComponent as MenuBtnIcon } from "../../svg/List.svg";
// import { ReactComponent as MoonIcon } from "../../svg/MoonStars.svg";
// import { ReactComponent as SunIcon } from "../../svg/SunDim.svg";
import { StyledHeader } from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { useState } from "react";
import NavigationMenu from "components/NavigationMenu/NavigationMenu";
import { Nav } from "components/NavigationMenu/NavigationMenu.styled";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const linkStyle = {
    cursor: "pointer",
  };

  const toggleNav = () => {
    setIsOpenMenu((isOpen) => !isOpen);
  };

  return (
    <>
      {isOpenMenu && <NavigationMenu toggleNav={toggleNav} />}
      <StyledHeader>
        {!isDesktop ? (
          <MenuBtnIcon onClick={toggleNav} width={"36px"} height={"36px"} />
        ) : (
          <Nav>
            <Link to="about" smooth={true} duration={500} style={linkStyle}>
              About me
            </Link>
            <Link to="projects" smooth={true} duration={500} style={linkStyle}>
              Projects
            </Link>
            <Link to="skills" smooth={true} duration={500} style={linkStyle}>
              Skills
            </Link>
            <Link
              to="socialMedia"
              smooth={true}
              duration={500}
              style={linkStyle}
            >
              My Social Media
            </Link>
          </Nav>
        )}
      </StyledHeader>
    </>
  );
};

export default Header;
