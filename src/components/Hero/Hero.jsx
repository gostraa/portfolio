import { useTranslation } from "react-i18next";
import { ReactComponent as CVSvg } from "../../svg/ReadCvLogo.svg";

import {
  LinksWrapper,
  StyledAbout,
  StyledHeroWrapper,
  StyledI,
  StyledTitle,
  Typing,
} from "./Hero.styled";

import Button from "components/Button/Button";
import { handleDownloadCV } from "helpers/downloadCV";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <StyledHeroWrapper>
      <Typing />
      <div>
        <StyledTitle>{t("Hi, I'm Mariia")}</StyledTitle>
        <StyledI>{t("Front-end developer")}</StyledI>
        <StyledAbout>
          {t("I specialize in building web applications ")}
          {t(
            "using technologies such as HTML, CSS, JavaScript, React, and Node.js ."
          )}
        </StyledAbout>
        <LinksWrapper>
          <Button
            type="primary"
            isInHero={true}
            text={t("Download CV")}
            is={"button"}
            onClick={handleDownloadCV}
          >
            <CVSvg />
          </Button>
        </LinksWrapper>
      </div>
    </StyledHeroWrapper>
  );
};

export default Hero;
