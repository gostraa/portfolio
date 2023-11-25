import styled from "styled-components";

export const StyledAboutSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  padding: 98px 24px 38px 24px;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 25px;
  transform: rotateZ(145deg);
`;
export const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 15px 10px;
  border-radius: 8px;
  background-color: var(--surface-primary);
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-bottom: 15px;
`;
export const StyledAboutTitle = styled.h2`
  color: #7dffaf;
  font-family: Kalam, sans-serif;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 6px;
`;

export const StyledGeneralP = styled.p`
  color: var(--text-primary);
  font-family: Heebo, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 16px;
`;

export const StyledSecondaryP = styled.p`
  color: var(--text-secondary);
  font-family: Heebo, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
`;
