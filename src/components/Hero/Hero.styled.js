import styled from "styled-components";

export const StyledHeroWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 10px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  align-self: stretch;
`;

export const StyledTitle = styled.h1`
  font-family: Kalam, sans-serif;
  font-size: 40px;
  line-height: 1.4;
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
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
