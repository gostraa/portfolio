import { useGSAPAnimations } from "hooks/hero/useGSAPAnimations";
import { ReactComponent as CVSvg } from "../../svg/ReadCvLogo.svg";

import {
  LinksWrapper,
  StyledAbout,
  StyledHeroWrapper,
  StyledI,
  StyledScrollDown,
  StyledSnake,
  StyledTitle,
  Typing,
} from "./Hero.styled";

import Button from "components/Button/Button";

import { useRef } from "react";

const Hero = () => {
  const hint = useRef();
  useGSAPAnimations(hint);

  return (
    <div>
      <StyledHeroWrapper>
        <Typing />
        <div>
          <StyledTitle>Hi, I'm Mariia</StyledTitle>
          <StyledI>Front-end developer</StyledI>
          <StyledAbout>
            I specialize in building web applications using technologies such as
            HTML, CSS, JavaScript, React, Next.js and Node.js
          </StyledAbout>
          <LinksWrapper>
            <Button type="primary" text={"Download CV"}>
              <CVSvg />
            </Button>
          </LinksWrapper>
        </div>
      </StyledHeroWrapper>

      <StyledScrollDown ref={hint}>
        SCROLL DOWN TO FIND OUT MORE
      </StyledScrollDown>
      <StyledSnake />
    </div>
  );
};

export default Hero;
