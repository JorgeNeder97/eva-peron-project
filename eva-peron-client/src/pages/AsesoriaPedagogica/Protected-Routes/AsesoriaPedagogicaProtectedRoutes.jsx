import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAsesoriaPedagogicaAuth } from '../../../context/AsesoriaPedagogicaContext/AsesoriaPedagogicaContext';

export const AsesoriaPedagogicaProtectedRoutes = () => {

  const {usuario, isAuthenticated, loading} = useAsesoriaPedagogicaAuth()

  if(loading) return <h1>Loading...</h1>;
  if(!loading && !isAuthenticated) return <Navigate to="/asesoria-pedagogica" replace />;

  return <Outlet />;
}
