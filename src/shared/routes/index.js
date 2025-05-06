import { createBrowserRouter, useRoutes } from "react-router-dom";
import { AdminRoutes } from "./admin/AdminRoutes";
import { PublicRoutes } from "./public/PublicRoutes";
import App from "../../App";

export const AppRoutes = () => {
  const router = createBrowserRouter([...PublicRoutes, ...AdminRoutes]);
  return router;
};
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [...PublicRoutes, ...AdminRoutes],
  },
]);
