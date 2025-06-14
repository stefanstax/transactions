import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Navigate, Outlet } from "react-router";

const GuestRoute = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default GuestRoute;
