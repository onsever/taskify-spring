import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout } from "../components";
import { Dashboard, Login } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Settings from "../pages/Settings";

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
      {
        path: "/settings",
        element: (
          <ProtectedRoute>
            <Settings />
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
  {
    path: "*",
    element: <Error />,
  },
]);
export default router;
