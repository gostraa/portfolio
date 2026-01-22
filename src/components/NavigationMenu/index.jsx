import { Link } from 'react-scroll';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ReactComponent as Close } from '../../svg/X.svg';

import { Backdrop, Menu, Nav } from './NavigationMenu.styled';

import {
  animationSettingsNavigate,
  linkStyle,
  iconStyles,
  navLinks,
} from 'constants/constants';
import { useTranslation } from 'react-i18next';

const NavigationMenu = ({ toggleNav }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') toggleNav();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
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
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ ...linkStyle }}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleNav}
              >
                {t(label)}
              </Link>
            ))}
          </Nav>
          {/* <LanguageButtons /> */}
        </Menu>
      </AnimatePresence>
    </Backdrop>
  );
};

export default NavigationMenu;
