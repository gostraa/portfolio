import { motion } from "framer-motion";
import { ReactComponent as GitHub } from "../../svg/logo-github.svg";
import { ReactComponent as Linkedin } from "../../svg/logo-linkedin.svg";
import { ReactComponent as Instagram } from "../../svg/logo-instagram.svg";

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

const Footer = () => {
  return (
    <FooterSection id="socialMedia">
      <FooterContainer>
        <motion.div {...animationSettingsFooter}>
          <MyAvatar />
        </motion.div>

        <div>
          <TitleFooter>Contact</TitleFooter>
          <Primary>Enjoyed my work? Let’s work together</Primary>
          <Secondary>
            I’m always up for a chat. Pop me an email at
            <a href="mailto:mariiacherkashyna7@gmail.com">
              mariiacherkashyna7@gmail.com
            </a>
            or give me a shout on social media.
          </Secondary>
          <SocialList>
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
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
