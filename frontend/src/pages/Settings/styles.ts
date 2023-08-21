import { styled } from "styled-components";

export const Container = styled.div`
  padding-left: 2rem;
  padding-top: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.5rem;
  width: 100%;

  & span {
    display: block;
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #562cf6;
  color: #ffffff;
  padding: 1rem 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  width: 100%;
  letter-spacing: 1px;

  &:hover {
    background-color: #4e29d6;
  }

  &:active {
    background-color: #4e29d6;
  }
`;
