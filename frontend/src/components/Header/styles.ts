import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  margin-left: 15rem;
  width: calc(100% - 15rem);
  height: 4.5rem;
`;

export const LogoutButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #562cf6;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #000000;
  }
`;
