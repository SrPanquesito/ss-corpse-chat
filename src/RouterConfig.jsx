import {
    createBrowserRouter,
    redirect
  } from 'react-router-dom';
import Login from './layouts/public/auth/login/Login'
import Register from './layouts/public/auth/register/Register';
import MainLayout from './layouts/MainLayout';

const RouterConfig = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          loader: async () => redirect('/register')
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login />
        }
      ]
    }
]);

export default RouterConfig;