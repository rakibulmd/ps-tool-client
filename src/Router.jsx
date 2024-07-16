import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";

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
]);

export default router;
