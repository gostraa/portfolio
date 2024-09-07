import styled from "styled-components";
import { ReactComponent as TypingSvg } from "../../svg/bro.svg";
import { ReactComponent as Snake } from "../../svg/Snake.svg";

export const Typing = styled(TypingSvg)`
  width: 322px;
  height: 276px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 522px;
    height: 476px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 482px;
    height: 426px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
export const StyledSnake = styled(Snake)`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    position: absolute;
    bottom: -70%;
    z-index: -3;
  }
`;

export const StyledHeroWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 120px 24px 50px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    padding: 80px 24px 30px 24px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    padding: 180px 44px 50px 44px;
  }
`;

export const StyledTitle = styled.h1`
  font-family: Kalam, Manrope;
  font-size: 40px;
  line-height: 1.4;
  background: linear-gradient(90deg, #9955e8 0%, #7bffaf 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 1024px) {
    font-size: 38px;
  }
`;

export const StyledI = styled.p`
  color: var(--text-primary);
  font-family: Heebo, Manrope;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 10px;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const StyledAbout = styled.p`
  color: var(--text-secondary);
  font-family: Heebo, Manrope;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
  max-width: 600px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledScrollDown = styled.p`
  color: #7dffaf;
  text-align: center;
  font-family: Kalam, Manrope;
  font-size: 16px;

  margin: 0 auto;
  padding: 50px 10px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;
