import styled from "styled-components";

export const StyledListProject = styled.ul`
  margin-bottom: 40px;
  @media screen and (max-width: 767.9px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    & .slick-slide {
      max-width: 353px;
    }
  }

  @media screen and (min-width: 1440px) {
    & .slick-slide {
      max-width: 590px;
    }
  }
  & .slick-slide > div {
    width: 312px;
  }

  & .slick-list > div {
    @media screen and (min-width: 768px) {
      margin: 0 10px;
    }
    @media screen and (min-width: 1439.9px) and (max-width: 1619.5px) {
      margin: 0 35px;
    }
    @media screen and (min-width: 1620px) {
      margin: 0 55px;
    }
  }
`;

export const StyledItem = styled.li`
  padding: 14px;
  background-color: var(--surface-primary);
  border: 2px solid #8a42db;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: 2px solid #7dffaf;
    transition: border 0.4s ease;
  }
  @media screen and (min-width: 1440px) {
    padding: 24px;
  }

  h3 {
    color: var(--text-primary);
    font-family: Heebo, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 1440px) {
      font-size: 28px;
    }
  }
`;

export const StyledDate = styled.p`
  color: var(--text-secondary);
  font-family: Heebo, sans-serif;
  font-size: 14px;
  line-height: 1.71;
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.8;
  }
`;

export const StyledTitleDescr = styled.p`
  color: var(--text-primary);
  font-family: Heebo, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  @media screen and (min-width: 1440px) {
    font-size: 25px;
    line-height: 1;
  }
`;
