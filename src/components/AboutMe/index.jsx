import { ReactComponent as HTMLSvg } from '../../svg/icons8-html.svg';
import { ReactComponent as CSSSvg } from '../../svg/icons8-css3.svg';
import { ReactComponent as JSSvg } from '../../svg/JavaScript.svg';
import { ReactComponent as ReactSvg } from '../../svg/React.svg';
import { ReactComponent as NodeSvg } from '../../svg/Node.js.svg';
import { ReactComponent as CVSvg } from '../../svg/ReadCvLogo.svg';
import { ReactComponent as ArrowSvg } from '../../svg/Graphic3.svg';
import { ReactComponent as AngularSvg } from '../../svg/icons8-angularjs.svg';

import Button from 'components/Button';

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
} from './AboutMe.styled';

import { useRef } from 'react';
import { useGSAPAnimations } from 'hooks/aboutMe/useGSAPAnimation';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const wrapperRef = useRef();
  const arrowSvgRef = useRef();
  const svgContainerRef = useRef();

  const { t } = useTranslation();

  useGSAPAnimations(wrapperRef, arrowSvgRef, svgContainerRef);

  return (
    <div ref={wrapperRef}>
      <StyledAboutSection id="about" className="section">
        <ArrowWrapper>
          <ArrowSvg className="arrow" ref={arrowSvgRef} />
        </ArrowWrapper>

        <StyledAboutWrapper>
          <Girl />
          <InfoWrapAbout>
            <SvgWrapper ref={svgContainerRef} style={{ opacity: 0 }}>
              <HTMLSvg className="svg" />
              <CSSSvg className="svg" />
              <JSSvg className="svg" />
              <ReactSvg className="svg" />
              <AngularSvg className="svg" />
              <NodeSvg className="svg" />
            </SvgWrapper>

            <StyledAboutTitle>{t('About')}</StyledAboutTitle>
            <StyledGeneralP>
              Frontend developer experienced in React, TypeScript, Next.js,
              Angular, and browser extensions. Passionate about building
              user-friendly interfaces and exploring new technologies.
            </StyledGeneralP>
            <StyledSecondaryP>
              In my free time, I enjoy playing guitar and singing, traveling,
              and spending time outdoors — activities that help me stay balanced
              and inspired.
            </StyledSecondaryP>
            <Button type="primary" text="Download CV">
              <CVSvg />
            </Button>
          </InfoWrapAbout>
        </StyledAboutWrapper>
      </StyledAboutSection>
    </div>
  );
};

export default AboutMe;
