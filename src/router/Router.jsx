import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx"; // Import the Register component
import Layout from "../component/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [ 
      {
        path: "/", // Main route of the application
        element: <Home />, // Displays the Home component for '/'
      },
      {
        path: "/add", // Route for adding an item
        element: <Add />, // Displays the Add component for '/add'
      },
      {
        path: "/edit/:id", // Route for editing an item by ID
        element: <Edit />, // Displays the Edit component for '/edit/:id'
      },
      {
        path: "/login", // Route for the login page
        element: <Login />, // Displays the Login component for '/login'
      },
      {
        path: "/register", // Route for the registration page
        element: <Register />, // Displays the Register component for '/register'
      },
    ]
  }
]);

export default router;
