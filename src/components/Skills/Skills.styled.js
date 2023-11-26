import styled from "styled-components";
import { ReactComponent as Star } from "../../svg/Graphic2.svg";
import { ReactComponent as StarSecond } from "../../svg/Graphic1.svg";

export const StarSvg = styled(Star)`
  position: absolute;
  left: -10px;
  bottom: 10%;
  z-index: -1;
  transform: rotateZ(35deg);
  @media screen and (min-width: 1440px) {
    width: 220px;
    height: 220px;
  }
`;

export const StarSecondSvg = styled(StarSecond)`
  position: absolute;
  right: -10px;
  bottom: 50%;
  z-index: -1;

  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 200px;
  }
`;

export const SkillsSection = styled.div`
  position: relative;
  padding: 10px 24px 48px;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
`;

export const SkillsTitle = styled.h2`
  color: #7dffaf;
  font-family: Kalam, sans-serif;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 14px;
  @media screen and (min-width: 1024px) {
    gap: 18px;
  }

  li {
    color: var(--text-primary);
    background-color: rgba(138, 66, 219, 0.9);
    padding: 12px;
    border-radius: 8px;
    @media screen and (min-width: 1024px) {
      padding: 16px;
      font-size: 20px;
    }
  }
`;
