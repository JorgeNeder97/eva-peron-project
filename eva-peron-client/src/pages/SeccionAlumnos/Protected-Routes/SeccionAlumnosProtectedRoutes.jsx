import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSeccionAlumnosAuth } from '../../../context/SeccionAlumnosContext/SeccionAlumnosContext';

export const SeccionAlumnosProtectedRoutes = () => {

  const {usuario, isAuthenticated, loading} = useSeccionAlumnosAuth()

  if(loading) return <h1>Loading...</h1>;
  if(!loading && !isAuthenticated) return <Navigate to="/alumnos" replace />;

  return <Outlet />;
}
