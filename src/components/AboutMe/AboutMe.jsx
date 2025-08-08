import { ReactComponent as HTMLSvg } from '../../svg/icons8-html.svg';
import { ReactComponent as CSSSvg } from '../../svg/icons8-css3.svg';
import { ReactComponent as JSSvg } from '../../svg/JavaScript.svg';
import { ReactComponent as ReactSvg } from '../../svg/React.svg';
import { ReactComponent as NodeSvg } from '../../svg/Node.js.svg';
import { ReactComponent as CVSvg } from '../../svg/ReadCvLogo.svg';
import { ReactComponent as ArrowSvg } from '../../svg/Graphic3.svg';
import { ReactComponent as AngularSvg } from '../../svg/icons8-angularjs.svg';

import Button from 'components/Button/Button';

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
              {t('Currently, I am collaborating with')}{' '}
              <LinkLeo href="https://www.upwork.com/agencies/leosource/">
                Leo•Source
              </LinkLeo>{' '}
              {t(
                'where I apply my skills and expertise to drive impactful solutions in commercial development',
              )}
            </StyledGeneralP>
            <StyledSecondaryP>
              {t(
                'My passion for programming is in harmony with my love for music, as well as my self-taught guitar skills. I value the ability to dive into studies for entire days, losing track of time',
              )}
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
