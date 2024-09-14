import styled from "styled-components";

import { ReactComponent as DevGrlSvg } from "../../svg/devGirl.svg";

export const Girl = styled(DevGrlSvg)`
  width: 312px;
  height: 276px;

  @media screen and (min-width: 768px) {
    width: 410px;
    height: 360px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 452px;
    min-height: 402px;
  }
`;

export const LinkLeo = styled.a`
  color: #7dffaf;
  text-decoration: underline;
`;

export const StyledAboutSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  padding: 90px 24px 50px 24px;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: 80px;
  top: 25px;
  transform: rotateZ(145deg);

  @media screen and (min-width: 768px) {
    width: 200px;
    left: 40%;
    top: 0%;
    & svg {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 200px;
    left: 40%;
    top: -10%;
    & svg {
      width: 250px;
      height: 250px;
    }
  }
`;
export const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 15px 10px;
  border-radius: 8px;
  background-color: var(--surface-primary);
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 72px;
    gap: 60px;
  }
`;

export const InfoWrapAbout = styled.div`
  max-width: 592px;
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    & svg {
      width: 30px;
      height: 30px;
    }
  }
  @media screen and (min-width: 1024px) {
    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;
export const StyledAboutTitle = styled.h2`
  color: #7dffaf;
  font-family: Kalam, Caveat;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 6px;
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const StyledGeneralP = styled.p`
  color: var(--text-primary);
  font-family: Heebo, Manrope;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const StyledSecondaryP = styled.p`
  color: var(--text-secondary);
  font-family: Heebo, Manrope;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;
