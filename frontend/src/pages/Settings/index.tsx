import React from "react";
import { Container, Title, Input, Form, Button, Label } from "./styles";
import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} from "../../redux/features/user/usersFeature.ts";
import jwtDecode from "jwt-decode";
import { JWTReturn } from "../../types";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const accessToken = localStorage.getItem("accessToken");
  const decodedToken: JWTReturn = jwtDecode(accessToken!);
  const userId = decodedToken.userId;
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const { data, isLoading, error } = useGetUserByIdQuery(userId, {
    refetchOnMountOrArgChange: true,
  });
  const [updateUserById, { isSuccess }] = useUpdateUserByIdMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateUserById({
      id: userId,
      data: {
        username,
        email,
        firstName,
        lastName,
      },
    });
  };

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  React.useEffect(() => {
    if (data) {
      setUsername(data.username);
      setEmail(data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
    }
  }, [data]);

  if (isLoading || !data)
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );

  return (
    <Container>
      <Title>Settings</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>Username</span>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          <span>Email</span>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>
          <span>First Name</span>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Label>
        <Label>
          <span>Last Name</span>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Label>
        <Button>Save</Button>
      </Form>
    </Container>
  );
}
