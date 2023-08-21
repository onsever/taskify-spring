import { Container, Heading, Spacer } from "./styles.ts";
import { Board } from "../../components";
import { useGetAllTasksByUserIdQuery } from "../../redux/features/task/taskFeature.ts";
import React from "react";
import jwtDecode from "jwt-decode";
import { JWTReturn } from "../../types";
import FilterTabs from "../../components/FilterTabs";

export default function Dashboard() {
  const accessToken = localStorage.getItem("accessToken");
  const decodedToken: JWTReturn = jwtDecode(accessToken!);
  const userId = decodedToken.userId;

  const [filter, setFilter] = React.useState("All");

  const { data, isLoading, refetch } = useGetAllTasksByUserIdQuery(userId, {
    refetchOnMountOrArgChange: true,
  });

  const onFilter = (status: string) => {
    setFilter(status);
  };

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
      <FilterTabs onValueChange={onFilter} />
      {data && <Board tasks={data} filter={filter} />}
    </Container>
  );
}
