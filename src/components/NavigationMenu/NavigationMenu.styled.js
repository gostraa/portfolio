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
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  z-index: 999;
  background-color: var(--surface-primary);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 26px;
  padding: 10px 0;
  color: var(--text-primary);
  font-family: Heebo, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 767.9px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
