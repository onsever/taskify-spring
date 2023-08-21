import { Task } from "../../types";
import {
  TaskCard,
  Title,
  Description,
  StatusBadge,
  TaskInfoContainer,
  Icon,
} from "./styles.ts";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <>
      <TaskCard>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
        <TaskInfoContainer>
          <StatusBadge priority={task.priority}>{task.priority}</StatusBadge>
          <Link to={`/tasks/${task.taskId}`}>
            <Icon>
              <AiFillEdit size={30} color={"#562CF6"} />
            </Icon>
          </Link>
        </TaskInfoContainer>
      </TaskCard>
    </>
  );
}
