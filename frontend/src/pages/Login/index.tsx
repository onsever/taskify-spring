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
import React from "react";
import { useLoginMutation } from "../../redux/features/auth/authFeature.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { setToken } from "../../redux/features/auth/authSlice.ts";
import { Link, useNavigate } from "react-router-dom";
import {} from "../../components/SideBar/styles.ts";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.token);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login({ usernameOrEmail, password });
      if (res.data) {
        const accessToken = res.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        dispatch(setToken(accessToken));
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <CenteredWrapper>
      <Container>
        <LogoContainer>
          <LogoIcon>T</LogoIcon>
          <Logo>Taskify</Logo>
        </LogoContainer>
        <Title>Sign In</Title>
        {isLoading && <p>Loading...</p>}
        {error && <Error>{error.data.message}</Error>}
        <Form onSubmit={handleSubmit}>
          <Label>
            <span>Username or Email</span>
            <Input
              type="text"
              placeholder="Enter your username"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
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
          <Button type="submit">Login</Button>
        </Form>
        <Message>
          New User?{" "}
          <Link to={"/register"}>
            <span>Sign Up</span>
          </Link>
        </Message>
      </Container>
    </CenteredWrapper>
  );
}
