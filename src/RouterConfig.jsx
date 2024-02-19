import { useEffect } from 'react';
import {
    createBrowserRouter,
    Outlet,
    redirect
  } from "react-router-dom";
import Login from './layouts/Login';
import Register from './layouts/Register';
import { useSettings, useDispatchSettings } from './providers/SettingsProvider';
import ButtonDarkmode from './components/shared/ButtonDarkmode';

const Root = () => {
  const settings = useSettings();
  const dispatchSettings = useDispatchSettings();

  useEffect(() => {
    dispatchSettings({type: 'darkmode/status'});
  }, [settings.darkmode]);

  return (
      <main className={`h-screen ` + (settings.darkmode ? "dark" : "")}>
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