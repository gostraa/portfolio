import { ReactComponent as TypingSvg } from "../../svg/bro.svg";
import { ReactComponent as CVSvg } from "../../svg/ReadCvLogo.svg";
import { ReactComponent as ArrowRightSvg } from "../../svg/ArrowRight.svg";
import {
  LinksWrapper,
  StyledAbout,
  StyledHeroWrapper,
  StyledI,
  StyledTitle,
} from "./Hero.styled";
import Button from "components/Button/Button";

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <TypingSvg width="322" height="276" />

      <div>
        <StyledTitle>Hi, I'm Mariia</StyledTitle>
        <StyledI>Front-end developer</StyledI>
        <StyledAbout>
          I specialize in building web applications using technologies such as
          HTML, CSS, JavaScript, React, and Node.js .
        </StyledAbout>
        <LinksWrapper>
          <Button type="secondary" isInHero={true} text="My resume">
            <CVSvg />
          </Button>

          <Button type="primary" isInHero={true} text="Get in touch">
            <ArrowRightSvg />
          </Button>
        </LinksWrapper>
      </div>
    </StyledHeroWrapper>
  );
};

export default Hero;
