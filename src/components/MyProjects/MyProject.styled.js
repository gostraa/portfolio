import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 90px 28px 50px 28px;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 767.9px) {
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTitle = styled.h2`
  text-align: center;
  color: #7dffaf;
  font-family: Kalam, Caveat;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 8px;
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const StyledDescr = styled.p`
  color: var(--text-primary);
  text-align: center;
  font-family: Heebo, Manrope;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 40px;
`;
