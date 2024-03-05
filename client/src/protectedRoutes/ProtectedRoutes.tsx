import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/tokenStorage";

type ProtectedRoutesProps = {
  children?: React.ReactNode;
};

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const userToken = getToken();
  if (!userToken) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
