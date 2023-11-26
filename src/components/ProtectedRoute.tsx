import React from 'react'
import { Navigate, useLocation } from "react-router-dom"
import { LOCAL_STORAGE_TOKEN } from '../modules/login';

interface Props {
  children: React.ReactElement
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuth = localStorage.getItem(LOCAL_STORAGE_TOKEN)
  let location = useLocation();

  if(!isAuth) {
    return <Navigate to="/login" state={{ from: location}} replace />
  }
  return children
};

export default ProtectedRoute;