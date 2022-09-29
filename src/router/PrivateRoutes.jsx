import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { DashboardLayout } from "../components";

const PrivateRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <DashboardLayout>
      {!currentUser ? <Navigate to="/login" /> : <Outlet />}
    </DashboardLayout>
  );
};

export default PrivateRoutes;
