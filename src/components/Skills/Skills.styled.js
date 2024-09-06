import styled from "styled-components";
import { ReactComponent as Star } from "../../svg/Graphic2.svg";
import { ReactComponent as StarSecond } from "../../svg/Graphic1.svg";

export const StarSvg = styled(Star)`
  position: absolute;
  left: 30px;
  bottom: -15%;
  z-index: -1;
  transform: rotateZ(35deg);
`;

export const StarSecondSvg = styled(StarSecond)`
  position: absolute;
  right: 30px;
  bottom: 75%;
  z-index: -1;
`;

export const SkillsSection = styled.section`
  position: relative;
  padding: 90px 24px 20px;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
`;

export const SkillsTitle = styled.h2`
  color: #7dffaf;
  font-family: Kalam, sans-serif;
  font-size: 18px;
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
