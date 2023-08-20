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
import { useParams } from "react-router-dom";
import {
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} from "../../redux/features/task/taskFeature.ts";

export default function EditTask() {
  const { taskId } = useParams<{ taskId: string }>();
  const { data, isLoading, error } = useGetTaskByIdQuery(taskId);
  const [updateTask] = useUpdateTaskMutation();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");

  const convertStatus = (status: string) => {
    if (status === "Todo") {
      return "TODO";
    } else if (status === "In Progress") {
      return "IN_PROGRESS";
    } else {
      return "DONE";
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTask({
      taskId: taskId,
      title: title,
      description: description,
      priority: priority.toUpperCase(),
      status: convertStatus(status),
      dueDate: "2023-08-16T18:05:35.160458",
    });
  };

  React.useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setPriority(data.priority);
      setStatus(data.status);
      setDueDate(data.dueDate);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Edit Task</Title>
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
          <p>Status</p>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Todo</option>
            <option>In Progress</option>
            <option>Done</option>
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
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
