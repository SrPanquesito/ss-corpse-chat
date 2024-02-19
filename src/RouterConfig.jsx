import {
    createBrowserRouter,
    redirect
  } from "react-router-dom";
import Login from './layouts/Login';
import Register from './layouts/Register';
import MainLayout from './layouts/MainLayout';

const RouterConfig = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          loader: async () => redirect("/register")
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    }
]);

export default RouterConfig;