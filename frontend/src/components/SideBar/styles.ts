import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #ffffff;
  left: 0;
  top: 0;
  bottom: 0;
  width: 15rem;
  border: 1px solid #eaeaf3;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  gap: 0.5rem;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #562cf6;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const LogoIcon = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  margin-right: 0.5rem;
  font-weight: 600;
  background-color: #14b2e1;
  padding: 0.5rem 1rem;
  border-radius: 50%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
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
  width: 80%;
  letter-spacing: 1px;

  &:hover {
    background-color: #4e29d6;
  }

  &:active {
    background-color: #4e29d6;
  }
`;
