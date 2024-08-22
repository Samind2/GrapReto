import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (
    user.roles.includes("ROLES_ADMIN") ||
    user.roles.includes("ROLES_MODERATOR")
  ) {
    return children;
  }
  return <Navigate to="/Notallowed" />;
};

export default ProtectedRoute;
