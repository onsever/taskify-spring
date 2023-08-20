import { styled } from "styled-components";
import { TaskPriority } from "../../types";

export const TaskCard = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: white;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const Description = styled.p`
  margin-top: 8px;
  color: #555;
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const StatusBadge = styled.span<{ priority: TaskPriority }>`
  display: inline-block;
  margin-top: 1rem;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ priority }) => {
    switch (priority) {
      case TaskPriority.LOW:
        return "#f39c12";
      case TaskPriority.MEDIUM:
        return "#3498db";
      case TaskPriority.HIGH:
        return "#2ecc71";
      default:
        return "#ccc";
    }
  }};
  color: white;
`;

// Task Item Style for the Editing Task

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  height: 100%;
  overflow-y: auto;
  border: 1px solid #eaeaf3;
`;

export const TaskItemTitle = styled.input`
  font-size: 1.2rem;
  font-weight: 600;
  color: #274060;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding-left: 5px;
  border: none;
  outline: none;
  width: 100%;
`;

export const TaskItemDescription = styled.textarea`
  font-size: 1rem;
  font-weight: 400;
  color: #274060;
  margin-bottom: 1rem;
  padding-left: 5px;
  border: none;
  outline: none;
  width: 100%;
  height: 100px;
`;

export const TaskItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const TaskItemStatusBadge = styled.span<{ priority: TaskPriority }>`
  display: inline-block;
  margin-top: 1rem;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ priority }) => {
    switch (priority) {
      case TaskPriority.LOW:
        return "#f39c12";
      case TaskPriority.MEDIUM:
        return "#3498db";
      case TaskPriority.HIGH:
        return "#2ecc71";
      default:
        return "#ccc";
    }
  }};
  color: white;
`;
