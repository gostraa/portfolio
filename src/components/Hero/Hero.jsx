import { ReactComponent as CVSvg } from "../../svg/ReadCvLogo.svg";

import {
  LinksWrapper,
  StyledAbout,
  StyledHeroWrapper,
  StyledI,
  StyledScrollDown,
  StyledTitle,
  Typing,
} from "./Hero.styled";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Button from "components/Button/Button";
import { handleDownloadCV } from "helpers/downloadCV";
import { useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  const hint = useRef();

  useGSAP(() => {
    gsap.fromTo(
      hint.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: hint.current,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
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
      {/* <div ref={hint}> */}
      <StyledScrollDown ref={hint}>
        SCROLL DOWN TO EXPLORE MORE
      </StyledScrollDown>
      {/* </div> */}
    </>
  );
};

export default Hero;
//#7DFFAF
// boxShadow: "0px 0px 48px 0px rgba(125, 255, 175, 0.24)";
