import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import NavigationMenu from 'components/NavigationMenu';
import { Nav } from 'components/NavigationMenu/NavigationMenu.styled';
import { BurgerSvg, StyledHeader } from './Header.styled';

import { linkSettings, navLinks } from 'constants/constants';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const toggleNav = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };
  const { t } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && <NavigationMenu toggleNav={toggleNav} />}
      </AnimatePresence>

      <StyledHeader>
        {!isDesktop ? (
          <BurgerSvg onClick={toggleNav} />
        ) : (
          <>
            <Nav>
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} {...linkSettings}>
                  {t(link.label)}
                </Link>
              ))}
            </Nav>

            {/* <LanguageButtons /> */}
          </>
        )}
      </StyledHeader>
    </>
  );
};

export default Header;
