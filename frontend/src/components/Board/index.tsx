import {
  AddNewTaskContainer,
  AddNewTaskIcon,
  Container,
  Grid,
  GridHeader,
  GridItem,
  GridTitle,
} from "./styles.ts";
import TaskItem from "../TaskItem";
import { Task, TaskStatus } from "../../types";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

interface BoardProps {
  tasks: Task[];
}

export default function Board({ tasks }: BoardProps) {
  const gridTitles = ["To Do", "In Progress", "Done"];

  const todoTasks: Task[] = tasks.filter(
    (task) => task.status === TaskStatus.TODO
  );
  const inProgressTasks: Task[] = tasks.filter(
    (task) => task.status === TaskStatus.IN_PROGRESS
  );
  const doneTasks: Task[] = tasks.filter(
    (task) => task.status === TaskStatus.DONE
  );

  const renderTasks = (tasks: Task[]) => {
    if (tasks.length === 0) {
      return (
        <AddNewTaskContainer>
          <Link to={"/createTask"}>
            <AddNewTaskIcon>
              <MdOutlineAddCircle size={50} />
            </AddNewTaskIcon>
          </Link>
          <p>It seems you don't have any tasks.</p>
          <p>Click the button above to add a new task.</p>
        </AddNewTaskContainer>
      );
    }

    return tasks.map((task) => <TaskItem key={task.taskId} task={task} />);
  };

  return (
    <Container>
      <GridHeader>
        {gridTitles.map((grid) => (
          <GridTitle key={grid}>{grid}</GridTitle>
        ))}
      </GridHeader>
      <Grid>
        <GridItem>{renderTasks(todoTasks)}</GridItem>
        <GridItem>{renderTasks(inProgressTasks)}</GridItem>
        <GridItem>{renderTasks(doneTasks)}</GridItem>
      </Grid>
    </Container>
  );
}
