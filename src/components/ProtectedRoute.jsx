import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/auth";

function ProtectedRoute({ allowedRole }) {
  const user = getUser();

  if (!user) return <Navigate to="/login" replace />;
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/no-autorizado" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
