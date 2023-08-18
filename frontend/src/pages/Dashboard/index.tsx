import { Container, Heading, Spacer } from "./styles.ts";
import { Board } from "../../components";
import { useGetUserByIdQuery } from "../../redux/features/usersFeature.ts";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetUserByIdQuery(1);

  console.log(import.meta.env);

  console.log(data, isLoading, isError);

  return (
    <Container>
      <Spacer />
      <Heading>Dashboard</Heading>
      <Board />
    </Container>
  );
}
