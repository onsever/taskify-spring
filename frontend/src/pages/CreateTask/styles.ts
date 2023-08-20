import { styled } from "styled-components";

export const Container = styled.div`
  padding-left: 2rem;
  padding-top: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 1rem;

  & div p {
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  padding: 0.8rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 0.8rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  resize: none;
  width: 100%;
  min-height: 150px;
`;

export const Select = styled.select`
  padding: 0.8rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const DateInput = styled.input`
  padding: 0.8rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #562cf6;
  color: #ffffff;
  padding: 0.8rem 1rem;
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
