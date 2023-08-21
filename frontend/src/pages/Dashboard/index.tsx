import { Container, Heading, Spacer } from "./styles.ts";
import { Board } from "../../components";
import { useGetTasksQuery } from "../../redux/features/task/taskFeature.ts";
import React from "react";

export default function Dashboard() {
  const { data, isLoading, refetch } = useGetTasksQuery();

  React.useEffect(() => {
    refetch();
  }, [refetch]);

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
