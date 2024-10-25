import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CookiePopUp from "./CookiePopUp/CookiePopUp";
import { useUserStore } from "../store/user";
import { useEffect } from "react";

const UserRouter = () => {
  const location = useLocation();
  const { token } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [token, navigate, location.pathname]);

  if (location.pathname === "/dashboard" && !token) {
    return <Navigate to="/login" replace />;
  }

  const hideNavFoot =
    location.pathname === "/sign-up" ||
    location.pathname === "/login" ||
    location.pathname === "/resetpassword" ||
    location.pathname === "/forgotpassword" ||
    location.pathname === "/passwords" ||
    location.pathname === "/deleteaccount" ||
    location.pathname === "/accountmember" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/accountpassword" ||
    location.pathname === "/accountpassword" ||
    location.pathname === "/accountmembersetting" ||
    location.pathname === "/myaccountsetting" ||
    location.pathname === "/myaccountbilling" ||
    location.pathname === "/myaccount" ||
    location.pathname === "/accountpassword" ||
    location.pathname === "/templatefirst";

  return (
    <div>
      {!hideNavFoot && <Navbar />}
      <Outlet />
      {!hideNavFoot && <Footer />}

      <CookiePopUp />
    </div>
  );
};

export default UserRouter;
