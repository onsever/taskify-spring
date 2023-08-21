import React from "react";
import {
  Container,
  Button,
  Form,
  Input,
  CenteredWrapper,
  Title,
  Error,
  Logo,
  LogoContainer,
  LogoIcon,
  Message,
  Label,
} from "./styles.ts";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/features/auth/authFeature.ts";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const navigate = useNavigate();

  const [register, { isLoading, error, data }] = useRegisterMutation();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await register({
        username,
        password,
        email,
        firstName,
        lastName,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CenteredWrapper>
      <Container>
        <LogoContainer>
          <LogoIcon>T</LogoIcon>
          <Logo>Taskify</Logo>
        </LogoContainer>
        <Title>Sign Up</Title>
        <Form onSubmit={handleRegister}>
          <Label>
            <span>First Name</span>
            <Input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Label>
          <Label>
            <span>Last Name</span>
            <Input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Label>
          <Label>
            <span>Username</span>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Label>
          <Label>
            <span>Email</span>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            <span>Password</span>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Button type="submit">Register</Button>
        </Form>
        <Message>
          Already have an account?{" "}
          <Link to={"/login"}>
            <span>Sign In</span>
          </Link>
        </Message>
      </Container>
    </CenteredWrapper>
  );
}
