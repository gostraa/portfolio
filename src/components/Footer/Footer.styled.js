import styled from "styled-components";
import { ReactComponent as Avatar } from "../../svg/CuteAvatar.svg";

export const MyAvatar = styled(Avatar)`
  margin-bottom: 10px;
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
  padding: 90px 24px 50px 24px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--surface-primary);
  padding: 48px 34px;
  border-radius: 28px;
  @media screen and (min-width: 768px) {
    gap: 48px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitleFooter = styled.h2`
  color: #7dffaf;
  font-family: Kalam, Caveat;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 4px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Primary = styled.p`
  color: var(--text-primary);
  font-family: Heebo, Manrope;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 10px;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const Secondary = styled.p`
  color: var(--text-secondary);
  font-family: Heebo, Manrope;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    margin-bottom: 14px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 12px;
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
