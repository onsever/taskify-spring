import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout } from "../components";
import { Dashboard } from "../pages";

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
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
