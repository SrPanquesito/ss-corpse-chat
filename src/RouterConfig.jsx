import { useEffect } from 'react';
import {
    createBrowserRouter,
    Outlet,
    redirect
  } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import { useMainConfiguration, useMainConfigurationDispatch } from './providers/MainConfigurationProvider';

const Root = () => {
  const mainConfiguration = useMainConfiguration();
  const mainConfigurationDispatch = useMainConfigurationDispatch();

  useEffect(() => {
    mainConfigurationDispatch({type: 'darkmode/status'});
  }, [mainConfiguration.darkmode]);

  return (
      <main className={mainConfiguration.darkmode ? "dark" : ""}>
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