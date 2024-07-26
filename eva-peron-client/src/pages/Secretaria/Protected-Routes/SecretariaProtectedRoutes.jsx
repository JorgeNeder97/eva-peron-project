import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSecretariaAuth } from '../../../context/SecretariaContext/SecretariaContext';

export const SecretariaProtectedRoutes = () => {

  const {isAuthenticated, loading} = useSecretariaAuth()

  if(loading) return <h1>Loading...</h1>;
  if(!loading && !isAuthenticated) return <Navigate to="/secretaria" replace />;

  return <Outlet />;
}
