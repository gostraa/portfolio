import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 8px;

  @media screen and (min-width: 1024px) {
    width: 500px;
    gap: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 580px;
  }
`;

export const Input = styled.input`
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: black;
  color: #fff;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #4ade80;
  }

  @media screen and (min-width: 1024px) {
    padding: 22px;
  }
`;

export const TextArea = styled.textarea`
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: black;
  color: #fff;
  font-size: 16px;
  outline: none;
  resize: none;
  height: 150px;

  &:focus {
    border-color: #4ade80;
  }

  @media screen and (min-width: 1024px) {
    padding: 22px;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 1440px) {
    padding: 22px;
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  max-width: 200px;
  background-color: rgba(138, 66, 219, 0.9);
  color: #fff;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    border: 1px solid #7dffaf;
    box-shadow: 0px 0px 48px 0px rgba(125, 255, 175, 0.24);
  }

  @media screen and (min-width: 1024px) {
    height: 58px;
  }
`;

export const ErrorMessage = styled.p`
  color: #f87171;
  font-size: 0.875rem;
`;
