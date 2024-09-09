import { Link } from "react-scroll";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { ReactComponent as Close } from "../../svg/X.svg";

import { Backdrop, Menu, Nav } from "./NavigationMenu.styled";

import {
  animationSettingsNavigate,
  linkStyle,
  iconStyles,
} from "constants/constants";
import LanguageButtons from "components/languageButtons/LanguageButtons";
import { useTranslation } from "react-i18next";

const NavigationMenu = ({ toggleNav }) => {
  const { t } = useTranslation();

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
    <Backdrop
      {...animationSettingsNavigate}
      onClick={handleBackdropClick}
      key="unique-key2"
    >
      <AnimatePresence>
        <Menu key="unique-key">
          <Close onClick={toggleNav} style={{ ...iconStyles }} />
          <Nav>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              {t("About")}
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              {t("Projects")}
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              {t("Skills")}
            </Link>
            <Link
              to="socialMedia"
              smooth={true}
              duration={500}
              onClick={toggleNav}
              style={linkStyle}
            >
              {t("Contacts")}
            </Link>
          </Nav>
          <LanguageButtons />
        </Menu>
      </AnimatePresence>
    </Backdrop>
  );
};

export default NavigationMenu;
