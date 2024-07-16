import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import PSBook from "./pages/PSBook/PSBook";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <div>Something went wrong with login!</div>,
  },
  {
    path: "/psbook",
    element: <ProtectedRoute />,
    errorElement: <div>Something went wrong with login!</div>,
    children: [
      {
        path: "",
        element: <PSBook />,
        errorElement: <div>Something went wrong with PS Book!</div>,
        children: [
          {
            path: "jobs",
            element: <div>Jobs</div>,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: "customers",
            element: <div>Customers</div>,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: "inventory",
            element: <div>Inventory</div>,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: "delivery",
            element: <div>Delivery</div>,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: "billing",
            element: <div>Billling</div>,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: "manufacturing",
            element: <div>Manufacturing</div>,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: "employees",
            element: <div>Employees</div>,
            errorElement: <div>Something went wrong!</div>,
          },
          {
            path: "reports",
            element: <div>Reports</div>,
            errorElement: <div>Something went wrong!</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
