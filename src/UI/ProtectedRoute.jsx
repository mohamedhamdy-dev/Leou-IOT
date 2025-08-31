import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/account/signin" />;
}
