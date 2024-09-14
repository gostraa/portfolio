import styled from "styled-components";
import { motion } from "framer-motion";
export const Backdrop = styled(motion.div)`
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

export const Menu = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 24px;
  right: 24px;
  width: 60%;
  height: 40%;
  border-radius: 24px;
  z-index: 999;
  background-color: var(--surface-primary);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 767.9px) {
    width: 50%;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 44px;
  padding: 10px 0;
  color: var(--text-primary);
  font-family: Heebo, Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 767.9px) {
    font-weight: 700;
    line-height: 1.2;
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
