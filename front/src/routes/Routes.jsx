import AboutUs from "../pages/AboutUs";
import AccountMember from "../pages/Account/AccountMember";
import AccountMemberSetting from "../pages/Account/AccountMemberSetting";
import AccountSetPassword from "../pages/Account/AccountSetPassword";
import MyAccount from "../pages/Account/MyAccount/MyAccount";
import MyAccountBilling from "../pages/Account/MyAccountBilling";
import MyAccountSetting from "../pages/Account/MyAccountSetting";
import ContactUs from "../pages/ContactUs";
import CookiePopUp from "../pages/CookiePopUp/CookiePopUp";
import DashboardDesign from "../pages/Dashboard/DashboardDesign";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
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
import Template1 from "../pages/Template/Template1/Template1";
import Template10 from "../pages/Template/Template10/Template10";
import Template11 from "../pages/Template/Template11/Template11";
import Template12 from "../pages/Template/Template12/Template12";
import Template13 from "../pages/Template/Template13/Template13";
import Template14 from "../pages/Template/Template14/Template14";
import Template15 from "../pages/Template/Template15/Template15";
import Template16 from "../pages/Template/Template16/Template16";
import Template17 from "../pages/Template/Template17/Template17";
import Template18 from "../pages/Template/Template18/Template18";
import Template19 from "../pages/Template/Template19/Template19";
import Template2 from "../pages/Template/Template2/Template2";
import Template20 from "../pages/Template/Template20/Template20";
import Template21 from "../pages/Template/Template21/Template21";
import Template22 from "../pages/Template/Template22/Template22";
import Template23 from "../pages/Template/Template23/Template23";
import Template24 from "../pages/Template/Template24/Template24";
import Template25 from "../pages/Template/Template25/Template25";
import Template26 from "../pages/Template/Template26/Template26";
import Template27 from "../pages/Template/Template27/Template27";
import Template28 from "../pages/Template/Template28/Template28";
import Template29 from "../pages/Template/Template29/Template29";
import Template3 from "../pages/Template/Template3/Template3";
import Template30 from "../pages/Template/Template30/Template30";
import Template31 from "../pages/Template/Template31/Template31";
import Template32 from "../pages/Template/Template32/Template32";
import Template33 from "../pages/Template/Template33/Template33";
import Template34 from "../pages/Template/Template34/Template34";
import Template35 from "../pages/Template/Template35/Template35";
import Template36 from "../pages/Template/Template36/Template36";
import Template37 from "../pages/Template/Template37/Template37";
import Template38 from "../pages/Template/Template38/Template38";
import Template39 from "../pages/Template/Template39/Template39";
import Template4 from "../pages/Template/Template4/Template4";
import Template5 from "../pages/Template/Template5/Template5";
import Template6 from "../pages/Template/Template6/Template6";
import Template7 from "../pages/Template/Template7/Template7";
import Template8 from "../pages/Template/Template8/Template8";
import Template9 from "../pages/Template/Template9/Template9";
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
        element: <MyAccountBilling />,
      },
      {
        path: "cookiepopup",
        element: <CookiePopUp />,
      },
      {
        path: "myaccount",
        element: <MyAccount />,
      },
      {
        path: "dashboard",
        element: <DashboardDesign />,
      },
      {
        path: "errorpage",
        element: <ErrorPage />,
      },
      {
        path: "templatefirst",
        element: <Template1 />,
      },
      {
        path: "templatetwo",
        element: <Template2 />,
      },
      {
        path: "templatethird",
        element: <Template3 />,
      },
      {
        path: "templatefour",
        element: <Template4 />,
      },
      {
        path: "templatefive",
        element: <Template5 />,
      },
      {
        path: "templatesix",
        element: <Template6 />,
      },
      {
        path: "templateseven",
        element: <Template7/>,
      },
      {
        path: "templateeight",
        element: <Template8/>,
      },
      {
        path: "templatenine",
        element: <Template9/>,
      },
      {
        path: "templateten",
        element: <Template10/>,
      },
      {
        path: "templatehero",
        element: <Template11/>,
      },
      {
        path: "templateherotwo",
        element: <Template12/>,
      },
      {
        path: "templateherothird",
        element: <Template13/>,
      },
      {
        path: "templateherofour",
        element: <Template14/>,
      },
      {
        path: "templateherofive",
        element: <Template15/>,
      },
      {
        path: "templateherosix",
        element: <Template16/>,
      },
      {
        path: "templateheroseven",
        element: <Template17/>,
      },
      {
        path: "templateheroeight",
        element: <Template18/>,
      },
      {
        path: "templateheronine",
        element: <Template19/>,
      },
      {
        path: "templateheroten",
        element: <Template20/>,
      },
      {
        path: "templatedamone",
        element: <Template21/>,
      },
      {
        path: "templatedamtwo",
        element: <Template22/>,
      },
      {
        path: "templatedamthird",
        element: <Template23/>,
      },
      {
        path: "templatedamfour",
        element: <Template24/>,
      },
      {
        path: "templatedamfive",
        element: <Template25/>,
      },
      {
        path: "templatedamsix",
        element: <Template26/>,
      },
      {
        path: "templatedamseven",
        element: <Template27/>,
      },
      {
        path: "templatedameight",
        element: <Template28/>,
      },
      {
        path: "templatedamnine",
        element: <Template29/>,
      },
      {
        path: "templatedamten",
        element: <Template30/>,
      },
      {
        path: "templatedealone",
        element: <Template31/>,
      },
      {
        path: "templatedealtwo",
        element: <Template32/>,
      },
      {
        path: "templatedealthird",
        element: <Template33/>,
      },
      {
        path: "templatedealfour",
        element: <Template34/>,
      },
      {
        path: "templatedealfive",
        element: <Template35/>,
      },
      {
        path: "templatedealsix",
        element: <Template36/>,
      },
      {
        path: "templatedealseven",
        element: <Template37/>,
      },
      {
        path: "templatedealeight",
        element: <Template38/>,
      },
      {
        path: "templatedealnine",
        element: <Template39/>,
      },
    ],
  },
];
