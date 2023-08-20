import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #f6f7fa;
  margin-top: 1rem;
  padding: 1rem 2rem;
  border-top: 1px solid #eaeaf3;
  height: calc(
    100vh - 4.5rem - 4rem - 1rem
  ); // 100vh - Header - Spacer - ContainerPadding
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  height: 95%;
`;

export const GridHeader = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
`;

export const GridTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #274060;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding-left: 5px;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  height: 100%;
  overflow-y: auto;

  gap: 1rem;

  border: 1px solid #eaeaf3;
`;
