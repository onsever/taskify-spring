import React from "react";

import {
  Container,
  Title,
  Input,
  Form,
  Button,
  Select,
  TextArea,
  DateInput,
} from "./styles.ts";
import { useCreateTaskMutation } from "../../redux/features/task/taskFeature.ts";

export default function CreateTask() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("Low");
  const [dueDate, setDueDate] = React.useState("");

  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTask({
      title: title,
      description: description,
      priority: priority.toUpperCase(),
      dueDate: "2023-08-16T18:05:35.160458",
    });

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <Container>
      <Title>Create Task</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <p>Title</p>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <p>Description</p>
          <TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <p>Priority</p>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Select>
        </div>

        <div>
          <p>Due Date</p>
          <DateInput
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  );
}