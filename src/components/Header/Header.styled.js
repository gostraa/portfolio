import styled from "styled-components";
import { ReactComponent as MenuBtnIcon } from "../../svg/List.svg";

export const BurgerSvg = styled(MenuBtnIcon)`
  cursor: pointer;
`;

export const StyledHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 25px;
  width: 100%;
  margin: 0 auto;
  background-color: var(--background);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.65);
  position: fixed;
  z-index: 1;
  @media screen and (min-width: 1024px) {
    padding: 30px 44px;
    justify-content: space-between;
  }
`;
