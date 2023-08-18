import { Container, Grid, GridHeader, GridItem, GridTitle } from "./styles.ts";
import TaskItem from "../TaskItem";

export default function Board() {
  const grids = ["grid1", "grid2", "grid3"];
  const gridTitles = ["To Do", "In Progress", "Done"];

  return (
    <Container>
      <GridHeader>
        {gridTitles.map((grid) => (
          <GridTitle key={grid}>{grid}</GridTitle>
        ))}
      </GridHeader>
      <Grid>
        {grids.map((grid) => (
          <GridItem key={grid}>
            <TaskItem
              task={{
                id: 1,
                title: "Task 1",
              }}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
