import React from 'react'
import account from "../../../assets/images/accountmember/account.png";
import { Link } from "react-router-dom";
import AccountNavBar from "../components/AccountNavBar/AccountNavBar";
import "./_style.scss"
import AccountNoLogo from '../components/AccountNavBar/AccountNoLogo';
const AccountMemberSetting = () => {
  return (
    <section>
    <div className="container member">
      <AccountNoLogo/>

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
              <p className="font-size-20 font-weight-400 text-text">(user)</p>
            </div>
          </div>

          <div className="account_del mt-9">
            <button className=" bg-natural font-size-20 font-weight-400 text-text">
              Account
            </button>
            <button className="bg-primaryFAQ font-size-20 font-weight-400 text-text   ">
              Settings
            </button>
          </div>
        </div>



        <div className=" account_upgrade">
            <div>
              <h2 className="font-size-18 font-weight-500 text-text10 ">
              Software Preferences
              </h2>
              <div className="py-4  gap-10">
                <h4 className="font-size-16 font-weight-400 text-text60">
                Time zone
                </h4>
             

            <select name="" id="" className='select p-3 mt-3'>
              <option value=""  className=' option font-size-18 font-wegith-400'>(GMT+04:00) Asia/Baku</option>
            </select>

              </div>

              <div className='btn-save mt-5'>
        <Link className='font-size-16 font-weight-700 p-3 bg-primary  text-natural btn '>Save</Link>

              </div>

                
          
            </div>
          </div>
       

        <div className="personal">
     <div className="personal_title">
     <h2 className="font-size-18 font-weight-500 text-text10 mb-4">
          Delete User Account
          </h2>
          <h3 className="font-size-14 font-weight-500 text-text60 pb-2">
          Once you delete your account, you won't be able to log in, and your team members will also lose access to the account.

          </h3>
          
          <h3 className="font-size-14 font-weight-400 text-text60 pb-2 pt-4">
          Want to remove your account completely?
          </h3>
     </div>


         
        </div>
      </div>
    </div>
  </section>
  )
}

export default AccountMemberSetting
