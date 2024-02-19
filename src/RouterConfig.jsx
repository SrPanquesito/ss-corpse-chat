import { useEffect } from 'react';
import {
    createBrowserRouter,
    Outlet,
    redirect
  } from "react-router-dom";
import Login from './layouts/Login';
import Register from './layouts/Register';
import { useMainConfiguration, useMainConfigurationDispatch } from './providers/MainConfigurationProvider';
import ButtonDarkmode from './components/shared/ButtonDarkmode';

const Root = () => {
  const mainConfiguration = useMainConfiguration();
  const mainConfigurationDispatch = useMainConfigurationDispatch();

  useEffect(() => {
    mainConfigurationDispatch({type: 'darkmode/status'});
  }, [mainConfiguration.darkmode]);

  return (
      <main className={`h-screen ` + (mainConfiguration.darkmode ? "dark" : "")}>
        <section className="fixed top-3 right-3 z-50">
          <ButtonDarkmode />
        </section>
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