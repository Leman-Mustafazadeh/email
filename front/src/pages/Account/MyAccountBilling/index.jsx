import React, { useState } from 'react';
import account from "../../../assets/images/accountmember/account.png";
import { Link } from "react-router-dom";
import "./_style.scss";
import AccountNoLogo from "../components/AccountNavBar/AccountNoLogo";

const MyAccountBilling = () => {
  const [showModal, setShowModal] = useState(false); 
  const handleCancelClick = (e) => {
    e.preventDefault(); 
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

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
              <button className="bg-natural font-size-20 font-weight-400 text-text">
                <Link to={"/myaccount"}>
                Account</Link>
              </button>
              <button className=" bg-natural font-size-20 font-weight-400 text-text">
                <Link to={"/myaccountsetting"}>Settings</Link>
              </button>
              <button className=" bg-primaryFAQ font-size-20 font-weight-400 text-text">
                <Link to={"/myaccountbilling"}>Billing</Link>
              </button>
            </div>
          </div>

          <div className="account_upgrade">
            <div>
              <h2 className="font-size-18 font-weight-500 text-text10">
                Control Your Subscription
              </h2>
              <div className="py-4 gap-10">
                <h4 className="font-size-20 font-weight-500 text-primary">
                  Advanced
                </h4>
                <div className="row justify-between flex-justify-space-between pt-2">
                  <div className="row gap-10 flex-align-center mb-3">
                    <p className="font-size-16 font-weight-500 text-text60 template">
                      Members:
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
                        <rect width="42" height="6" rx="3" fill="#1A73E8" />
                      </svg>

                      <span className="pl-4">3 / 10</span>
                    </div>
                  </div>

                  <div className="cancel">
                    <a href="#" onClick={handleCancelClick} className="font-size-16 font-weight-400 text-text60">
                      Cancel subscription
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          {showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3 className='font-size-22 font-weight-500 text-text '>Are you sure you want to cancel your subscription?</h3>
                <p  className='font-size-16 font-weight-400 text-text60 '>We’re sad to see you go. Consider what you might miss out on by canceling your subscription.</p>
                <div className="modal-actions">
                  <button className="stay-btn font-size-18 font-weight-700 text-text60  bg-primary " onClick={handleCloseModal}>
                    No, I'll Stay
                  </button>
                  <button className="cancel-btn font-size-18 font-weight-700 text-text60 " >
                    Cancel subscription
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyAccountBilling;
