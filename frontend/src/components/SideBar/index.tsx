import {
  Button,
  Container,
  Logo,
  LogoContainer,
  LogoIcon,
  Nav,
} from "./styles.ts";

export default function SideBar() {
  return (
    <Container>
      <LogoContainer>
        <LogoIcon>T</LogoIcon>
        <Logo>Taskify</Logo>
      </LogoContainer>
      <Nav>
        <Button>New task</Button>
      </Nav>
    </Container>
  );
}
