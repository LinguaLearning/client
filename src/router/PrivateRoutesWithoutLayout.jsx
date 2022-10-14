import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { DashboardLayout } from "../components";

const PrivateRoutesWithoutLayout = () => {
  const { currentUser } = useAuth();
  return <div>{!currentUser ? <Navigate to="/login" /> : <Outlet />}</div>;
};

export default PrivateRoutesWithoutLayout;
