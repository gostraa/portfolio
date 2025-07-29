import { useGSAPAnimations } from "hooks/hero/useGSAPAnimations";
import { ReactComponent as CVSvg } from "../../svg/ReadCvLogo.svg";

import {
  Background,
  LinksWrapper,
  StyledAbout,
  StyledHeroWrapper,
  StyledI,
  StyledScrollDown,
  StyledSnake,
  StyledTitle,
  Typing,
  Wrapper,
} from "./Hero.styled";

import Button from "components/Button/Button";

import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const hint = useRef();
  useGSAPAnimations(hint);
  const { t } = useTranslation();

  return (
    <Background>
      <StyledHeroWrapper>
        <Typing />
        <div>
          <StyledTitle>{t("greetings")}</StyledTitle>
          <StyledI>{t("Front-end developer")}</StyledI>
          <StyledAbout>
            {t("I specialize in building web applications")}
            {t(
              "using JavaScript, React, Next.js and Angular"
            )}
          </StyledAbout>
          <LinksWrapper>
            <Button type="primary" text={"Download CV"}>
              <CVSvg />
            </Button>
          </LinksWrapper>
        </div>
      </StyledHeroWrapper>

      <Wrapper>
        <StyledScrollDown ref={hint}>{t("hint")}</StyledScrollDown>
        <StyledSnake />
      </Wrapper>
    </Background>
  );
};

export default Hero;
