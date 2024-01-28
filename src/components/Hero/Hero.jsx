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
  return (
    <StyledHeroWrapper>
      <Typing />
      <div>
        <StyledTitle>Hi, I'm Mariia</StyledTitle>
        <StyledI>Front-end developer</StyledI>
        <StyledAbout>
          I specialize in building web applications using technologies such as
          HTML, CSS, JavaScript, React, and Node.js .
        </StyledAbout>
        <LinksWrapper>
          <Button
            type="primary"
            isInHero={true}
            text={"Download CV"}
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
