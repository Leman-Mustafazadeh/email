import React from 'react'
import account from "../../../assets/images/accountmember/account.png";
import { Link } from "react-router-dom";
import "./_style.scss";
import AccountNoLogo from "../components/AccountNavBar/AccountNoLogo";
const MyAccountBilling = () => {
  return (
    <section>
      <div className="container member">
        <AccountNoLogo />

        <div className="account_wrap">
          <div className="account_head">
            <div className="account_hero row flex-align-center">
              <div>
                <img src={account} alt="" />
              </div>
              <div>
                <h2 className="font-size-24 font-weight-500 text-text">
                  kenantagiyev010@gmail.com
                </h2>
                <p className="font-size-20 font-weight-400 text-text">(admin)</p>
              </div>
            </div>

            <div className="account_dels mt-9 ">
              <button className=" bg-natural font-size-20 font-weight-400 text-text">
                Account
              </button>
              <button className="bg-primaryFAQ font-size-20 font-weight-400 text-text   ">
                Settings
              </button>
              <button className=" bg-natural font-size-20 font-weight-400 text-text">
                Billing
              </button>
            </div>
          </div>

          <div className=" account_upgrade">
            <div>
              <h2 className="font-size-18 font-weight-500 text-text10 ">
              Control Your Subscription
              </h2>
              <div className="py-4  gap-10">
                <h4 className="font-size-20 font-weight-500 text-primary">
                Advanced
                </h4>

                <div>
                          <div>
                            
                          </div>
                </div>

             <div>

             </div>
              </div>

            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default MyAccountBilling
