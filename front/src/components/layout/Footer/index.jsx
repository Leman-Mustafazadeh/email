import { Link } from "react-router-dom";
import "./_style.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="row flex-justify-space-between footer-group">
          <ul className="form-group footer-group-item">
            <li className="mb-2 font-size-18 font-weight-500">
              <Link to={""}>Solutions</Link>
            </li>
            <li>
              <Link to={""}>Email signature template</Link>
            </li>
            <li>
              <Link to={""}>Professional Email signature</Link>
            </li>
            <li>
              <Link to={""}>Pricing</Link>
            </li>
          </ul>

          <ul className="form-group footer-group-item">
            <li className="mb-2 font-size-18 font-weight-500">
              <Link to={""}>Email signature genarator</Link>
            </li>
            <li>
              <Link to={"/non-profit"}>Signature for non-profits</Link>
            </li>
            <li>
              <Link to={"/freelancer"}>Signature for freelancers</Link>
            </li>
            <li>
              <Link to={"/business"}>Signature for business</Link>
            </li>
          </ul>

          <ul className="form-group footer-group-item">
            <li className="mb-2 font-size-18 font-weight-500">
              <Link to={""}>Support</Link>
            </li>
            <li>
              <Link to={""}>Help center</Link>
            </li>
            <li>
              <Link to={""}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to={""}>Privacy Policy </Link>
            </li>
            <li>
              <Link to={""}>Thirty party tools</Link>
            </li>
          </ul>

          <ul className="form-group footer-group-item">
            <li className="mb-2 font-size-18 font-weight-500">
              <Link to={""}>Company</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div className="container py-6">
          <p>Copyright © 2024 Elevating Ltd All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
