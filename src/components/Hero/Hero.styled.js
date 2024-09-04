import styled from "styled-components";
import { ReactComponent as TypingSvg } from "../../svg/bro.svg";

export const Typing = styled(TypingSvg)`
  width: 322px;
  height: 276px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 422px;
    height: 376px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 482px;
    height: 426px;
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
  gap: 34px;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    padding: 100px 24px 10px 24px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    padding: 180px 24px 50px 24px;
    gap: 54px;
  }
`;

export const StyledTitle = styled.h1`
  font-family: Kalam, sans-serif;
  font-size: 40px;
  line-height: 1.4;
  max-width: 280px;
  background: linear-gradient(90deg, #9955e8 0%, #7bffaf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledI = styled.p`
  color: var(--text-primary);
  font-family: Heebo, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 10px;
`;

export const StyledAbout = styled.p`
  color: var(--text-secondary);
  font-family: Heebo, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
  max-width: 600px;

  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledScrollDown = styled.p`
  color: #7dffaf;
  font-family: Kalam, sans-serif;
  font-size: 16px;
  width: 300px;
  margin: 0 auto;
  padding: 50px 10px;
  @media screen and (min-width: 768px) {
    width: 400px;
    font-size: 22px;
  }

  @media screen and (min-width: 1024px) {
    width: 450px;
    font-size: 24px;
  }
`;
