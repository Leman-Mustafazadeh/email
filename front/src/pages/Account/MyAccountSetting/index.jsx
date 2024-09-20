import React from "react";
import account from "../../../assets/images/accountmember/account.png";
import { Link } from "react-router-dom";
import { Select } from "antd"; 
import "./_style.scss";
import AccountNoLogo from "../components/AccountNavBar/AccountNoLogo";

const { Option } = Select; 
const MyAccountSetting = () => {
  return (
    <section className="my-account-settings">
      <div className="container member">
        <AccountNoLogo />

        <div className="account_wrap">
          <div className="account_head">
            <div className="account_hero row flex-align-center">
              <div className="account_image">
                <img src={account} alt="Account" />
              </div>

              <div className="account_info">
                <h2 className="font-size-24 font-weight-500 text-text">
                  kenantagiyev010@gmail.com
                </h2>
                <p className="font-size-20 font-weight-400 text-text">(user)</p>
              </div>
            </div>

            <div className="account_dels mt-9">
              <button className="btn bg-natural font-size-20 font-weight-400 text-text">
                <Link to={'/accountmember'}>Account</Link>
              </button>
              <button className="btn bg-primaryFAQ font-size-20 font-weight-400 text-text">
                Settings
              </button>
              <button className="btn bg-natural font-size-20 font-weight-400 text-text">
                Billing
              </button>
            </div>
          </div>

          <div className="account_upgrade mt-6">
            <h2 className="font-size-18 font-weight-500 text-text10">
              Software Preferences
            </h2>

            <div className="preference_group  gap-10">
              <h4 className="font-size-16 font-weight-400 text-text60">
                Time zone
              </h4>

              <Select
                defaultValue="GMT+04:00"
                className="timezone-select mt-3"
                style={{ width: "100%" }}
                size="large"
              >
                <Option value="GMT+04:00">(GMT+04:00) Asia/Baku</Option>
                <Option value="GMT+00:00">(GMT+00:00) UTC</Option>
                <Option value="GMT-05:00">
                  (GMT-05:00) Eastern Time (US & Canada)
                </Option>
                <Option value="GMT+08:00">(GMT+08:00) Beijing, China</Option>
              </Select>

              <div className="btn-save mt-5">
              <Link
                to="#"
                className="btn font-size-16 font-weight-700 p-3 bg-primary text-natural"
              >
                Save
              </Link>
            </div>
            </div>

            
          </div>

          <div className="personal mt-6">
            <div className="personal_title">
              <h2 className="font-size-18 font-weight-500 text-text10 mb-4">
                Delete User Account
              </h2>
              <h3 className="font-size-14 font-weight-500 text-text60 pb-2">
                Once you delete your account, you won't be able to log in, and
                your team members will also lose access to the account.
              </h3>

              <h3 className="font-size-14 font-weight-400 text-text60 pb-2 pt-4">
                Want to remove your account completely?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccountSetting;
