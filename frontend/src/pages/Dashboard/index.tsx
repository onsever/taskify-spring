import { Container, Heading, Spacer } from "./styles.ts";
import { Board } from "../../components";
import { useGetTasksQuery } from "../../redux/features/task/taskFeature.ts";

export default function Dashboard() {
  const { data, isLoading } = useGetTasksQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Heading>Dashboard</Heading>
      <Spacer />
      {data && <Board tasks={data} />}
    </Container>
  );
}
