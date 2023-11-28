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
  StyledAboutSection,
  StyledAboutTitle,
  StyledAboutWrapper,
  StyledGeneralP,
  StyledSecondaryP,
  SvgWrapper,
} from "./AboutMe.styled";

import { handleDownloadCV } from "helpers/downloadCV";

const AboutMe = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ArrowWrapper>
          <ArrowSvg />
        </ArrowWrapper>

        <StyledAboutWrapper>
          <Girl />
          <InfoWrapAbout>
            <SvgWrapper>
              <HTMLSvg />
              <CSSSvg />
              <JSSvg />
              <ReactSvg />
              <NodeSvg />
            </SvgWrapper>

            <StyledAboutTitle>About me</StyledAboutTitle>
            <StyledGeneralP>
              I am an ambitious front-end developer seeking my first commercial
              experience.
            </StyledGeneralP>
            <StyledSecondaryP>
              Besides programming, I am a music enthusiast, coffee lover, and
              self-taught guitarist. I am currently seeking opportunities to
              apply my skills and enthusiasm to an IT company in Ukraine or
              Slovakia. I am eager to take on new challenges.
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
    </>
  );
};

export default AboutMe;
