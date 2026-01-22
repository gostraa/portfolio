import Slider from 'react-slick';
import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 28px;
  max-width: 1440px;
  margin: 0 auto;
  color: var(--text-primary);
  position: relative;

  @media screen and (max-width: 767.9px) {
    align-items: center;
    justify-content: center;
    padding: 60px 20px 50px 20px;
  }
`;

export const StyledTitle = styled.h2`
  text-align: center;
  color: #7dffaf;
  font-family: Kalam, Caveat;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 18px;

  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const StyledDescr = styled.p`
  text-align: center;
  font-family: Heebo, Manrope;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40%;
  margin-bottom: 0;

  h2 {
    font-family: Heebo, Manrope;
    font-size: 34px;
    font-weight: 500;
    line-height: 1.33;
  }

  p {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Project = styled.div`
  display: flex !important;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #7dffaf 0%, #4fd1c5 100%);
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #7dffaf;
    margin-bottom: 4px;
  }

  > p {
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    font-size: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      position: relative;
      padding-left: 24px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 8px;
        height: 8px;
        background: #7dffaf;
        border-radius: 50%;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;

    h4 {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 600;
      margin-bottom: 4px;
    }

    > div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      line-height: 1.2;

      span {
        padding: 6px 14px;
        background: rgba(125, 255, 175, 0.1);
        border: 1px solid rgba(125, 255, 175, 0.3);
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
        color: #4fd1c5;
        cursor: default;
      }
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 32px;

    h3 {
      font-size: 24px;
    }

    > p {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 15px;
    padding: 24px;

    h3 {
      font-size: 26px;
    }

    > p {
      font-size: 16px;
    }

    > div > div span {
      font-size: 13px;
      padding: 7px 16px;
    }
  }
`;

export const SlideList = styled(Slider)`
  max-width: 90%;
  position: relative;

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;

    > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .slick-prev,
  .slick-next {
    width: 34px;
    height: 34px;
    transition: all 0.3s ease;

    &:before {
      font-size: 34px;
      opacity: 0.5;
      transition: all 0.3s ease;
    }

    &:hover:before {
      opacity: 1;
      color: #7dffaf;
    }
  }

  .slick-prev {
    left: -60px;
  }

  .slick-next {
    right: -60px;
  }

  @media screen and (max-width: 768px) {
    .slick-prev {
      left: -30px;
    }

    .slick-next {
      right: -30px;
    }

    .slick-prev,
    .slick-next {
      width: 26px;
      height: 26px;

      &:before {
        font-size: 26px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 50%;
  }
`;
