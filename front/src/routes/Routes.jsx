import Brands from "../components/views/Home/Brands";
import CreateSign from "../components/views/Home/CreateSign";
import Disclaimers from "../components/views/Home/DIsclaimers";
import EmailSign from "../components/views/Home/EmailSign";
import Explore from "../components/views/Home/Explore";
import FAQs from "../components/views/Home/FAQ";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserRouter from "../pages/UserRouter";
import PATH from "./constant";

export const Routes = [
  {
    path: PATH.main,
    element: <UserRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "brand",
        element: <Brands />,
      },
      {
        path: "createsign",
        element: <CreateSign />,
      },
      {
        path: "disclaimers",
        element: <Disclaimers />,
      },
      {
        path: "emailsign",
        element: <EmailSign />,
      },

      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "faq",
        element: <FAQs />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      
    ],
  },
];
