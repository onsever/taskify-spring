import { styled } from "styled-components";

export const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
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

export const Error = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
  color: red;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #562cf6;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const LogoIcon = styled.div`
  font-size: 1.2rem;
  color: #ffffff;
  margin-right: 0.5rem;
  font-weight: 600;
  background-color: #14b2e1;
  padding: 0.5rem 1rem;
  border-radius: 50%;
`;

export const Message = styled.div`
  font-size: 0.8rem;
  color: #000000;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 0.5rem;

  & span {
    color: #562cf6;
    font-weight: 500;
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;
