import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: rgba(23, 16, 35, 0.9);
  backdrop-filter: blur(3px);
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 24px;
  background: var(--surface-primary);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 340px;
  overflow: auto;
  text-align: start;

  @media screen and (min-width: 767.9px) {
    width: 640px;
  }

  @media screen and (min-width: 1024px) {
    width: 840px;
  }
`;

export const SvgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 12px;
  top: 12px;
  background-color: var(--background);
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  cursor: pointer;
  @media screen and (min-width: 767.9px) {
    width: 38px;
    height: 38px;
    left: 8px;
    top: 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 45px;
    height: 45px;
    left: 24px;
    top: 24px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  background-image: linear-gradient(
    to right,
    #8a42db,
    #008fff,
    #00c0ff,
    #00e4de,
    #7dffaf
  );
  @media screen and (min-width: 767.9px) {
    height: 340px;
  }
`;
export const Img = styled.img`
  width: 325px;
  height: 215px;
  @media screen and (min-width: 767.9px) {
    width: 540px;
    height: 295px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 15px 20px;
  color: var(--text-primary);
  font-size: 18px;
  font-family: Kalam, sans-serif;
  p:nth-child(1) {
    font-size: 20px;
  }

  @media screen and (min-width: 767.9px) {
    padding: 20px 30px;
    font-size: 18px;
    gap: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    gap: 24px;
  }
`;
export const Primary = styled.p`
  color: #7dffaf;
`;
