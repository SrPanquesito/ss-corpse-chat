import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authStatusFromLocalStorage } from 'providers/auth/AuthActions';
import { ROUTES } from 'utils/constants';

const ProtectedPrivateRoute = () => {
  const { isAuthenticated } = authStatusFromLocalStorage();
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN_ROUTE} replace />;
  }
  return <Outlet />;
};

export default ProtectedPrivateRoute;