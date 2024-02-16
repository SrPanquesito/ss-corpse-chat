import {
    createBrowserRouter
  } from "react-router-dom";
  import Login from './components/Login';
  import Register from './components/Register';

const RouterConfig = createBrowserRouter([
    {
      path: "/",
      element: <Register />
    },
    {
      path: "login",
      element: <Login />
    },
  ]);

export default RouterConfig;