import {
  Container,
  Button,
  Form,
  Input,
  CenteredWrapper,
  Title,
  Error,
} from "./styles.ts";
import React from "react";
import { useLoginMutation } from "../../redux/features/auth/authFeature.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { setToken } from "../../redux/features/auth/authSlice.ts";
import { useNavigate } from "react-router-dom";

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
        <Title>Login</Title>
        {isLoading && <p>Loading...</p>}
        {error && <Error>{error.data.message}</Error>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter your username"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </CenteredWrapper>
  );
}
