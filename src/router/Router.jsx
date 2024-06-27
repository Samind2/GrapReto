import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

export default router;
