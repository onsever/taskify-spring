import { styled } from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.8rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.8rem;
  width: 100%;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  gap: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;
