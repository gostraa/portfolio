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
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Button from "components/Button/Button";

import { useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  const hint = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".snake-line",
      { opacity: 0 },
      {
        strokeDasharray: "2600",
        strokeDashoffset: "2600",
        opacity: 1,
        duration: 10,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: hint.current,
          start: "top 75%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      hint.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 5,
        scrollTrigger: {
          trigger: hint.current,
          start: "top 60%",
          end: "top 15%",
          scrub: true,
        },
      }
    );
  });

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
