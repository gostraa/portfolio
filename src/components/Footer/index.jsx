import { motion } from 'framer-motion';
import {
  FooterContainer,
  FooterSection,
  MyAvatar,
  Primary,
  Secondary,
  SocialLink,
  SocialList,
  TitleFooter,
} from './Footer.styled';
import { animationSettingsFooter, socialLinks } from 'constants/constants';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterSection id="socialMedia">
      <FooterContainer>
        <div>
          <motion.div {...animationSettingsFooter}>
            <MyAvatar />
          </motion.div>
          <TitleFooter>{t('Contacts')}</TitleFooter>
          <Primary>{t('Enjoyed my work?')}</Primary>
          <Secondary>
            {t('I’m always up for a chat')}{' '}
            {t('or give me a shout on social media')}
          </Secondary>
          <SocialList>
            {socialLinks.map(({ id, href, Icon }) => (
              <li key={id}>
                <SocialLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </SocialLink>
              </li>
            ))}
          </SocialList>
        </div>
        <ContactForm />
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
