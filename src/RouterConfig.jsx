import {
    createBrowserRouter,
    redirect
  } from "react-router-dom";
  import Login from './components/Login';
  import Register from './components/Register';

const RouterConfig = createBrowserRouter([
    {
      path: "/",
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