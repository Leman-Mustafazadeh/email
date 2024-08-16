import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const UserRouter = () => {
  const location = useLocation();
  const hideNavFoot =
    location.pathname === "/sign-up" || location.pathname === "/login";
    
  return (
    <div>
      {!hideNavFoot && <Navbar />}
      <Outlet />
      {!hideNavFoot && <Footer />}
    </div>
  );
};

export default UserRouter;
