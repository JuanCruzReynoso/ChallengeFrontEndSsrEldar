import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/useAuthContext';
import RoleBasedRedirect from './RoleBasedRedirect';

const AuthGuard: React.FC = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, usa RoleBasedRedirect
  return (
    <>
      <RoleBasedRedirect />
      <Outlet />
    </>
  );
};

export default AuthGuard;
