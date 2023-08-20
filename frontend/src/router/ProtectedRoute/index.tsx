import { Navigate, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }: RouteProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const auth = useSelector((state) => state.auth);

  return <>{auth.token ? children : <Navigate to="/login" replace />}</>;
}
