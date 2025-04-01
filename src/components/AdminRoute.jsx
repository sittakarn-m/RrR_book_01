// components/AdminRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../states/useUserStore";

const AdminRoute = ({ children }) => {
  const { token, user } = useUserStore();

  if (!token || user?.role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
