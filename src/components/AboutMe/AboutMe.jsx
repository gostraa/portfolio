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
              I am a goal-oriented front-end developer who has recently embarked
              on a journey in commercial development with{" "}
              <LinkLeo href="https://www.upwork.com/agencies/leosource/">
                Leo•Source
              </LinkLeo>
              .
            </StyledGeneralP>
            <StyledSecondaryP>
              My passion for programming is in harmony with my love for music,
              as well as my self-taught guitar skills. I value the ability to
              dive into studies for entire days, losing track of time. Having
              completed a full-stack development course, I have significantly
              expanded my horizons and skills in development. I am now
              enthusiastically applying and enhancing my knowledge and skills in
              a dynamic IT environment.
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
