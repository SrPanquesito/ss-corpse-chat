import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authStatusFromLocalStorage } from 'providers/auth/AuthActions';

const ProtectedPublicRoute = () => {
  const { isAuthenticated } = authStatusFromLocalStorage();
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
};

export default ProtectedPublicRoute;