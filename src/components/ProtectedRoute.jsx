// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../states/useUserStore";

const ProtectedRoute = ({ children }) => {
  const { token } = useUserStore();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
