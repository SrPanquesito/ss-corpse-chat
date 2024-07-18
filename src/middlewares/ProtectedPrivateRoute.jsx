import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authStatusFromLocalStorage } from 'providers/auth/AuthActions';

const ProtectedPrivateRoute = () => {
  const { isAuthenticated } = authStatusFromLocalStorage();
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedPrivateRoute;