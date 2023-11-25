import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  width: 100%;
  margin: 0 auto;
  background-color: var(--background);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.65);
  position: fixed;
  z-index: 1;
  @media screen and (min-width: 1024px) {
    padding: 10px 40px;
  }
`;
