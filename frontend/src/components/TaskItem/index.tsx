interface TaskItemProps {
  task: {
    id: number;
    title: string;
  };
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <div>
      <h1>{task.title}</h1>
    </div>
  );
}
