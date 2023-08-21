import { Container, LogoutButton } from "./styles.ts";
import { clearToken } from "../../redux/features/auth/authSlice.ts";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <Container>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
