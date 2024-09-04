import Home from "../pages/Home";
import Brands from "../pages/Home/components/Brands";
import CreateSign from "../pages/Home/components/CreateSign";
import Disclaimers from "../pages/Home/components/Disclaimers";
import EmailSign from "../pages/Home/components/EmailSign";
import Explore from "../pages/Home/components/Explore";
import FAQs from "../pages/Home/components/FAQ";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserRouter from "../pages/UserRouter";
import PATH from "./constant";
import ForgotPassword from "../pages/ForgotPassword";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import NonProfit from "../pages/NonProfit";
import Freelancer from "../pages/SignaturePages/Freelancer";
import ResetPassword from "../pages/ResetPassword";
import Passwords from "../pages/Password";
import Business from "../pages/SignaturePages/Business";
import MyAccountDeleteAccount from "../pages/MyAccount-DeleteAccount";
import AccountMember from "../pages/AccountMember";
import Pricing from "../pages/Pricing";

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
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "passwords",
        element: <Passwords />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "non-profit",
        element: <NonProfit />,
      },
      {
        path: "freelancer",
        element: <Freelancer />,
      },
      {
        path: "business",
        element: <Business />,
      },
      {
        path: "deleteaccount",
        element: <MyAccountDeleteAccount />,
      },
      {
        path: "accountmember",
        element: <AccountMember />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
];
