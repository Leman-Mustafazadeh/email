/* eslint-disable react/no-unescaped-entities */
import SectionHeader from "../../../../components/common/SectionHeader";
import user1 from "../../../../assets/images/users/user-1.png";
import user2 from "../../../../assets/images/users/user-2.png";
import user3 from "../../../../assets/images/users/user-3.png";
import user4 from "../../../../assets/images/users/user-4.png";
import user5 from "../../../../assets/images/users/user-5.png";
import user6 from "../../../../assets/images/users/user-6.png";
import user7 from "../../../../assets/images/users/user-7.png";
import "./_customers.scss";
import { BiSolidStar } from "react-icons/bi";

function Customers() {
  return (
    <div className="customers">
      <SectionHeader header="What our customers are saying" />
      <div className="container row flex-justify-center rating my-6">
        <div className="users">
          <img src={user4} alt="" />
          <img src={user3} alt="" />
          <img src={user5} alt="" />
          <img src={user6} alt="" />
          <img src={user7} alt="" />
        </div>
        <div className="rating-folowers ml-3">
          <div className="stars">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
          </div>
          <span>Loved by 35K+ customers</span>
        </div>
      </div>
      <div className="container row gap-5" style={{ flexWrap: "nowrap" }}>
        <div className="col-12 col-md-6 col-lg-4 p-6 customers-item">
          <div className="comment">
            <h4>Performance Metrics</h4>
            <p>
              As a small business owner, I rely on QR Code Creator to streamline
              my operations. It's a great website with a user-friendly
              interface. Plus, tracking scans has helped me analyze the
              effectiveness of my marketing campaigns.
            </p>
          </div>
          <div className="customer-ava">
            <img src={user1} alt="" />
            <div className="customer-name">
              <p>Logan Wang</p>
              <span>Small business owner</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-6 customers-item">
          <div className="comment">
            <h4>Performance Metrics</h4>
            <p>
              As a small business owner, I rely on QR Code Creator to streamline
              my operations. It's a great website with a user-friendly
              interface. Plus, tracking scans has helped me analyze the
              effectiveness of my marketing campaigns.
            </p>
          </div>
          <div className="customer-ava">
            <img src={user2} alt="" />
            <div className="customer-name">
              <p>Logan Wang</p>
              <span>Small business owner</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-6 customers-item">
          <div className="comment">
            <h4>Performance Metrics</h4>
            <p>
              As a small business owner, I rely on QR Code Creator to streamline
              my operations. It's a great website with a user-friendly
              interface. Plus, tracking scans has helped me analyze the
              effectiveness of my marketing campaigns.
            </p>
          </div>
          <div className="customer-ava">
            <img src={user3} alt="" />
            <div className="customer-name">
              <p>Logan Wang</p>
              <span>Small business owner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
