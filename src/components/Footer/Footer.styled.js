import styled from "styled-components";
import { ReactComponent as Avatar } from "../../svg/CuteAvatar.svg";

export const MyAvatar = styled(Avatar)`
  width: 160px;
  height: 160px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1024px) {
    width: 220px;
    height: 220px;
  }
`;

export const FooterSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 24px 38px 24px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background: var(--surface-primary);
  padding: 48px 28px;
  border-radius: 28px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const TitleFooter = styled.h2`
  color: #7dffaf;
  font-family: Kalam, sans-serif;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 8px;
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const Primary = styled.p`
  color: var(--text-primary);
  font-family: Heebo, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 16px;
  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Secondary = styled.p`
  color: var(--text-secondary);
  font-family: Heebo, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 14px;

  & a {
    color: #7dffaf;
    font-size: 16px;
    line-height: 1.5;
    text-decoration-line: underline;
    margin: 0 8px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    margin-bottom: 18px;

    & a {
      color: #7dffaf;
      font-size: 18px;
      line-height: 1.5;
      text-decoration-line: underline;
      margin: 0 8px;
    }
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background: var(--surface-secondary);
  &:hover {
    scale: 1.2;
    box-shadow: 0px 0px 48px 0px rgba(125, 255, 175, 0.24);
  }
`;
