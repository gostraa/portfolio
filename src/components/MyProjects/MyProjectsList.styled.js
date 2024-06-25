import styled from "styled-components";
import Slider from "react-slick";

export const StyledListProject = styled.ul`
  margin-bottom: 40px;
  @media screen and (max-width: 767.9px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
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

  img {
    min-height: 156px;
    width: 310px;
  }

  h3 {
    color: var(--text-primary);
    font-family: Kalam, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 1440px) {
      font-size: 28px;
    }
  }
`;

export const StyledProImg = styled.img`
  width: 100%;
`;

export const StyledSlideList = styled(Slider)`
  margin-bottom: 40px;

  & .slick-slide > div {
    margin: 0 20px;
    max-width: 305px;
    max-width: 372px;
  }
  @media screen and (min-width: 1024px) {
    & .slick-slide > div {
    }
  }
  @media screen and (min-width: 1440px) {
    & .slick-slide > div {
      margin: 0 27px;
      max-width: 405px;
    }
  }
`;

export const StyledSlideItem = styled.div`
  padding: 14px;
  background-color: var(--surface-primary);
  border: 2px solid #8a42db;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: 2px solid #7dffaf;
    transition: border 0.4s ease;
  }

  padding: 24px;
  img {
    height: 170px;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    color: var(--text-primary);
    font-family: Kalam, sans-serif;
    font-weight: 500;
    line-height: 1.3;
    font-size: 22px;
    margin-bottom: 8px;
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
  @media screen and (min-width: 767.9px) {
    font-size: 16px;
    line-height: 1.8;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const StyledTitleDescr = styled.p`
  width: 300px;
  color: var(--text-primary);
  font-family: Kalam, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
    width: 220px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 25px;
    width: 300px;
  }
`;
