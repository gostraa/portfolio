import { motion } from "framer-motion";
import { ReactComponent as GitHub } from "../../svg/logo-github.svg";
import { ReactComponent as Linkedin } from "../../svg/logo-linkedin.svg";
import { ReactComponent as Instagram } from "../../svg/logo-instagram.svg";
import { ReactComponent as Telegram } from "../../svg/telegram-svgrepo-com.svg";

import {
  FooterContainer,
  FooterSection,
  MyAvatar,
  Primary,
  Secondary,
  SocialLink,
  SocialList,
  TitleFooter,
} from "./Footer.styled";
import { animationSettingsFooter } from "constants/constants";
import { useTranslation } from "react-i18next";
import ContactForm from "components/ContactForm/ContactForm";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterSection id="socialMedia">
      <FooterContainer>
        <div>
          <motion.div {...animationSettingsFooter}>
            <MyAvatar />
          </motion.div>
          <TitleFooter>{t("Contacts")}</TitleFooter>
          <Primary>{t("Enjoyed my work?")}</Primary>
          <Secondary>
            {t("I’m always up for a chat")}{" "}
            {t("or give me a shout on social media")}
          </Secondary>
          <SocialList>
            <li>
              <SocialLink
                href="https://t.me/gosstra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram />
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href="https://github.com/gostraa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href="https://www.linkedin.com/in/mariia-cherkashynaa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href="https://www.instagram.com/_gostraa_/?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </SocialLink>
            </li>
          </SocialList>
        </div>
        <ContactForm />
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
