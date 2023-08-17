import { Container, Heading, Spacer } from "./styles.ts";
import { Board } from "../../components";

export default function Dashboard() {
  return (
    <Container>
      <Spacer />
      <Heading>Dashboard</Heading>
      <Board />
    </Container>
  );
}
