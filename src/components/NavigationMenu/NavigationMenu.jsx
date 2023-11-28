import { Link } from "react-scroll";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { ReactComponent as Close } from "../../svg/X.svg";

import { Backdrop, Menu, Nav } from "./NavigationMenu.styled";

import { animationSettingsNavigate } from "constants/constants";

const NavigationMenu = ({ toggleNav }) => {
  const iconStyle = {
    width: "30px",
    height: "30px",
  };

  const linkStyle = {
    cursor: "pointer",
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.code === "Escape") toggleNav();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [toggleNav]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleNav();
    }
  };
  return (
    <AnimatePresence>
      <Backdrop onClick={handleBackdropClick} key="unique-key2">
        <Menu {...animationSettingsNavigate} key="unique-key">
          <Close onClick={toggleNav} style={{ ...iconStyle }} />
          <Nav>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              About me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              Skills
            </Link>
            <Link
              to="socialMedia"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              My Social Media
            </Link>
          </Nav>
        </Menu>
      </Backdrop>
    </AnimatePresence>
  );
};

export default NavigationMenu;
