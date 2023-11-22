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
  backdrop-filter: blur(10px);
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: relative;
  border-radius: 24px;
  background: var(--surface-primary);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 840px;
  overflow: auto;
  text-align: start;
`;

export const SvgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  position: absolute;
  left: 24px;
  top: 24px;
  background-color: var(--background);
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 340px;
  background-image: linear-gradient(
    to right,
    #8a42db,
    #008fff,
    #00c0ff,
    #00e4de,
    #7dffaf
  );
`;
export const Img = styled.img`
  width: 540px;
  height: 295px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 30px;
  color: var(--text-primary);
  font-size: 24px;
  font-family: Kalam, sans-serif;
  p:nth-child(1) {
    font-size: 20px;
  }
`;
export const Primary = styled.p`
  color: #7dffaf;
`;
