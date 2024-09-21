import "./_style.scss";
import account from "../../../assets/images/accountmember/account.png";
import { Link } from "react-router-dom";
import AccountNoLogo from "../components/AccountNavBar/AccountNoLogo";
const AccountMember = () => {
  return (
    <section>
      <div className="container member">
        <AccountNoLogo />

        <div className="account_wrapd">
          <div className="account_head">
            <div className="account_hero row flex-align-center">
              <div>
                <img src={account} alt="" />
              </div>
              <div>
                <h2 className="font-size-24 font-weight-500 text-text">
                  aysuqulamaliyeva05@gmail.com
                </h2>
                <p className="font-size-20 font-weight-400 text-text">(user)</p>
              </div>
            </div>

            <div className="account_del mt-9">
              <button className="bg-primaryFAQ font-size-20 font-weight-400 text-text">
              <Link to={"/accountmember"}> Account</Link>
              </button>
              <button className="bg-natural font-size-20 font-weight-400 text-text">
              <Link to={"/accountmembersetting"}> Settings</Link>
              </button>
            </div>
          </div>

          <div
            className="row account_upgrade_head gap-4"
          >
            <div className="col-12 col-md-6 account_upgrade">
              <div>
                <h2 className="font-size-18 font-weight-500 text-text10 ">
                  Account Details
                </h2>
                <div className="py-4 row gap-10" >
                  <h4 className="font-size-16 font-weight-500 text-text60">
                    Customer ID:
                  </h4>
                  <p className="font-size-16 font-weight-400 text-text">
                    00128909
                  </p>
                </div>

                <div className="pb-4 row gap-10" >
                  <h4 className="font-size-16 font-weight-500 text-text60">
                    Signup date:
                  </h4>
                  <p className="font-size-16 font-weight-400 text-text">
                    Jul 20, 2024
                  </p>
                </div>

                <div className="pb-4 row gap-10" >
                  <h4 className="font-size-16 font-weight-500 text-text60">
                    Account plan:
                  </h4>
                  <p className="font-size-16 font-weight-400 text-text">
                    Free Trial (Expired)
                  </p>
                  <Link
                    to={""}
                    className="font-size-16 font-weight-400 text-primary"
                  >
                    Upgrade
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 account_upgrade ">
              <div className="">
                <h2 className="font-size-18 font-weight-500 text-text10 mb-5">
                  Account Storage
                </h2>

                <div
                  className="row gap-10 flex-align-center mb-3"
                >
                  <p className="font-size-16 font-weight-500 text-text60 template">
                    Template:
                  </p>
                  <div className="row flex-align-center ">
                    <svg
                      width="167"
                      height="6"
                      viewBox="0 0 167 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="167" height="6" rx="3" fill="#3C3C3C" />
                      <rect
                        width="167"
                        height="6"
                        rx="3"
                        fill="white"
                        fillOpacity="0.9"
                      />
                    </svg>

                    <span className="pl-4">0 / 10</span>
                  </div>
                </div>
                <div
                  className="row pb-7 flex-justify-space-between gap-10"
                >
                  <p className="font-size-16 font-weight-500 text-text60 template">
                    Members:
                  </p>
                  <div className="row flex-align-center">
                    <svg
                      width="167"
                      height="6"
                      viewBox="0 0 167 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="167" height="6" rx="3" fill="#3C3C3C" />
                      <rect
                        width="167"
                        height="6"
                        rx="3"
                        fill="white"
                        fillOpacity="0.9"
                      />
                      <rect width="42" height="6" rx="3" fill="#1A73E8" />
                    </svg>

                    <span className="pl-4 pr-5">3 / 10</span>
                    <Link
                      to={""}
                      className="font-size-16 font-weight-400 text-primary"
                    >
                      Add users
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="personal">
            <h2 className="font-size-18 font-weight-500 text-text10 mb-5">
              Personal Information
            </h2>
            <h3 className="font-size-16 font-weight-500 text-text60 pb-2">
              Login Email:
            </h3>
            <div className="row gap-10"  >
              <input
                type="text"
                placeholder="kenantagiyev010@gmail.com"
                className="font-size-14 font-weight-400 text-text "
              />
              <Link
                to={""}
                className="font-size-14 font-weight-400 text-text60"
              >
                Change email
              </Link>
            </div>
            <h3 className="font-size-16 font-weight-500 text-text60 pb-2 pt-4">
              Password:
            </h3>
            <div className="row gap-10"  >
              <input type="password" placeholder="---------" />
              <Link
                to={""}
                className="font-size-14 font-weight-400 text-primary "
              >
                Set a password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountMember;
