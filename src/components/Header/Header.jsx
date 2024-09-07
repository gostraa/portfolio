import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import NavigationMenu from "components/NavigationMenu/NavigationMenu";
import { Nav } from "components/NavigationMenu/NavigationMenu.styled";
import { BurgerSvg, StyledHeader } from "./Header.styled";

import { linkSettings } from "constants/constants";
import LanguageButtons from "components/languageButtons/LanguageButtons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const toggleNav = () => {
    setIsOpenMenu((isOpen) => !isOpen);
  };
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {isOpenMenu && <NavigationMenu toggleNav={toggleNav} />}
      </AnimatePresence>

      <StyledHeader>
        {!isDesktop ? (
          <BurgerSvg onClick={toggleNav} />
        ) : (
          <Nav>
            <Link to="about" {...linkSettings}>
              {t("About")}
            </Link>

            <Link to="skills" {...linkSettings}>
              {t("Skills")}
            </Link>
            <Link to="projects" {...linkSettings}>
              {t("Projects")}
            </Link>
            <Link to="socialMedia" {...linkSettings}>
              {t("Contacts")}
            </Link>
          </Nav>
        )}
        <LanguageButtons />
      </StyledHeader>
    </>
  );
};

export default Header;
