import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #ffffff;
  left: 0;
  top: 0;
  bottom: 0;
  width: 15rem;
  border: 1px solid #eaeaf3;
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem;
  gap: 0.5rem;
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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
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

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  padding: 0;
  height: 100%;
  margin-top: 1rem;

  div:first-child {
    flex: 1;
  }

  .tag {
    font-size: 0.7rem;
    margin-top: 2rem;
    padding: 0.3rem 1rem;
    color: #8a94a3;
    font-weight: 500;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;
