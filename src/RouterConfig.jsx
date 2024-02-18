import {
    createBrowserRouter,
    Outlet,
    redirect
  } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

const Root = () => {
  return (
      <main className="dark">
        <Outlet />
      </main>
  )
}

const RouterConfig = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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