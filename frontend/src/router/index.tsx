import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout } from "../components";
import { Dashboard, Login } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/createTask",
        element: (
          <ProtectedRoute>
            <CreateTask />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tasks/:taskId",
        element: (
          <ProtectedRoute>
            <EditTask />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
