import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles.ts";

export default function Error() {
  const [count, setCount] = React.useState(5);
  const navigate = useNavigate();

  React.useEffect(() => {
    const id = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    if (count === 0) {
      navigate("/");
    }

    return () => {
      clearTimeout(id);
    };
  }, [count, navigate]);

  return (
    <Container>
      <h1>Error: Page not found.</h1>
      <h2>Redirecting to home page in {count} seconds...</h2>
    </Container>
  );
}
