import { ReactComponent as HTMLSvg } from "../../svg/icons8-html.svg";
import { ReactComponent as CSSSvg } from "../../svg/icons8-css3.svg";
import { ReactComponent as JSSvg } from "../../svg/JavaScript.svg";
import { ReactComponent as ReactSvg } from "../../svg/React.svg";
import { ReactComponent as NodeSvg } from "../../svg/Node.js.svg";
import { ReactComponent as CVSvg } from "../../svg/ReadCvLogo.svg";
import { ReactComponent as ArrowSvg } from "../../svg/Graphic3.svg";

import Button from "components/Button/Button";

import {
  ArrowWrapper,
  Girl,
  InfoWrapAbout,
  LinkLeo,
  StyledAboutSection,
  StyledAboutTitle,
  StyledAboutWrapper,
  StyledGeneralP,
  StyledSecondaryP,
  SvgWrapper,
} from "./AboutMe.styled";

import { handleDownloadCV } from "helpers/downloadCV";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { getScrollTriggerSettings } from "helpers/getScrollTrigerSettings";

const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const container = useRef();
  const arrow = useRef();
  const svgContainer = useRef();
  const svgs = useRef([]);

  useGSAP(() => {
    const { start, end } = getScrollTriggerSettings();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start,
        end,
        scrub: false,
        once: true,
      },
      onComplete: () => {
        svgContainer.current.style.opacity = 1;

        svgs.current = svgContainer.current.querySelectorAll(".svg");

        let delay = 0;
        svgs.current.forEach((elem) => {
          delay += 0.1;
          gsap.fromTo(
            elem,
            {
              y: "100%",
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              delay,
              ease: "bounce.out",
            }
          );
        });
      },
    });

    tl.fromTo(
      container.current,
      { x: "-100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "circ.out",
      }
    ).fromTo(
      arrow.current,
      { y: "100%", x: "-100%", opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
      }
    );
  });

  return (
    <div ref={container}>
      <StyledAboutSection id="about" className="section">
        <ArrowWrapper>
          <ArrowSvg className="arrow" ref={arrow} />
        </ArrowWrapper>

        <StyledAboutWrapper>
          <Girl />
          <InfoWrapAbout>
            <SvgWrapper ref={svgContainer} style={{ opacity: 0 }}>
              <HTMLSvg className="svg" />
              <CSSSvg className="svg" />
              <JSSvg className="svg" />
              <ReactSvg className="svg" />
              <NodeSvg className="svg" />
            </SvgWrapper>

            <StyledAboutTitle>About me</StyledAboutTitle>
            <StyledGeneralP>
              Currently, I am collaborating with{" "}
              <LinkLeo href="https://www.upwork.com/agencies/leosource/">
                Leo•Source
              </LinkLeo>{" "}
              , where I apply my skills and expertise to drive impactful
              solutions in commercial development.
            </StyledGeneralP>
            <StyledSecondaryP>
              My passion for programming is in harmony with my love for music,
              as well as my self-taught guitar skills. I value the ability to
              dive into studies for entire days, losing track of time.
            </StyledSecondaryP>
            <Button
              type="primary"
              isInHero={false}
              text="Download CV"
              is={"button"}
              onClick={handleDownloadCV}
            >
              <CVSvg />
            </Button>
          </InfoWrapAbout>
        </StyledAboutWrapper>
      </StyledAboutSection>
    </div>
  );
};

export default AboutMe;
