import { Container, Grid, GridHeader, GridItem, GridTitle } from "./styles.ts";
import TaskItem from "../TaskItem";
import { Task, TaskStatus } from "../../types";
import React from "react";

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

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <Container>
      <GridHeader>
        {gridTitles.map((grid) => (
          <GridTitle key={grid}>{grid}</GridTitle>
        ))}
      </GridHeader>
      <Grid>
        <GridItem>
          {todoTasks.map((task) => (
            <TaskItem key={task.taskId} task={task} />
          ))}
        </GridItem>
        <GridItem>
          {inProgressTasks.map((task) => (
            <TaskItem key={task.taskId} task={task} />
          ))}
        </GridItem>
        <GridItem>
          {doneTasks.map((task) => (
            <TaskItem key={task.taskId} task={task} />
          ))}
        </GridItem>
      </Grid>
    </Container>
  );
}
