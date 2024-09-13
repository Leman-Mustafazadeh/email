import AboutUs from "../pages/AboutUs";
import AccountMember from "../pages/Account/AccountMember";
import AccountMemberSetting from "../pages/Account/AccountMemberSetting";
import AccountSetPassword from "../pages/Account/AccountSetPassword";
import MyAccount from "../pages/Account/MyAccount/MyAccount";
import MyAccountBilling from "../pages/Account/MyAccountBilling";
import MyAccountSetting from "../pages/Account/MyAccountSetting";
import ContactUs from "../pages/ContactUs";
import CookiePopUp from "../pages/CookiePopUp/CookiePopUp";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Brands from "../pages/Home/components/Brands";
import CreateSign from "../pages/Home/components/CreateSign";
import Disclaimers from "../pages/Home/components/Disclaimers";
import EmailSign from "../pages/Home/components/EmailSign";
import Explore from "../pages/Home/components/Explore";
import FAQs from "../pages/Home/components/FAQ";
import Login from "../pages/Login";
import MyAccountDeleteAccount from "../pages/MyAccount-DeleteAccount";
import NonProfit from "../pages/NonProfit";
import Passwords from "../pages/Password";
import Pricing from "../pages/Pricing";
import ResetPassword from "../pages/ResetPassword";
import Business from "../pages/SignaturePages/Business";
import Freelancer from "../pages/SignaturePages/Freelancer";
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
        path: "accountpassword",
        element: <AccountSetPassword />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "accountmembersetting",
        element: <AccountMemberSetting />,
      },
      {
        path: "myaccountsetting",
        element: <MyAccountSetting />,
      },
      {
        path: "myaccountbilling",
        element: <MyAccountBilling/>,
      },
      {
        path: "cookiepopup",
        element: <CookiePopUp/>,
      },
      {
        path: "myaccount",
        element: <MyAccount/>,
      },
    ],
  },
];
