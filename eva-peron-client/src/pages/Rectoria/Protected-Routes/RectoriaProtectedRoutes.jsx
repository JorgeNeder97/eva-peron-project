import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRectoriaAuth } from '../../../context/RectoriaContext/RectoriaContext';

export const RectoriaProtectedRoutes = () => {

  const {usuario, isAuthenticated, loading} = useRectoriaAuth()

  if(loading) return <h1>Loading...</h1>;
  if(!loading && !isAuthenticated) return <Navigate to="/rectoria" replace />;

  return <Outlet />;
}
