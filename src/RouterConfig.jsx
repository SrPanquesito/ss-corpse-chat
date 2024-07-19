import {
    createBrowserRouter,
    redirect
  } from 'react-router-dom';
import Login from 'layouts/public/auth/login/Login'
import Register from 'layouts/public/auth/register/Register';
import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/public/auth/AuthLayout';
import HomeLayout from 'layouts/private/HomeLayout';
import ProtectedPrivateRoute from 'middlewares/ProtectedPrivateRoute';
import ProtectedPublicRoute from 'middlewares/ProtectedPublicRoute';

const RouterConfig = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          loader: () => redirect('/home')
        },
        {
          path: 'auth',
          element: <ProtectedPublicRoute />,
          children: [
            {
              index: true,
              element: <AuthLayout />
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
        },
        {
          path: 'home',
          element: <ProtectedPrivateRoute />,
          children: [
            {
              index: true,
              element: <HomeLayout />
            }
          ]
        }
      ]
    }
]);

export default RouterConfig;