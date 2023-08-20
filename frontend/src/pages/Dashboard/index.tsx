import { Container, Heading, Spacer } from "./styles.ts";
import { Board } from "../../components";
import { useGetUserByIdQuery } from "../../redux/features/user/usersFeature.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

export default function Dashboard() {
  const { data, isLoading, isError } = useGetUserByIdQuery(1);
  const auth = useSelector((state: RootState) => state.auth);
  console.log(data, isLoading, isError);

  console.log(auth);

  return (
    <Container>
      <Spacer />
      <Heading>Dashboard</Heading>
      <Board />
    </Container>
  );
}
