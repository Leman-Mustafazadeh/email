import { Link } from "react-router-dom"
import "./_style.scss"
const Footer = () => {
  return (
  <footer className="py-10 ">
    <div className="container">
    <div>
     <div className="row flex-justify-space-between ">
      <ul className="form-group ">
        <li  className="mb-2 font-size-18 font-weight-500"><Link to={""}>Solutions</Link></li>
        <li><Link to={""}>Email signature genarator</Link></li>
        <li><Link to={""}>Email signature </Link></li>
        <li><Link to={""}>Pricing</Link></li>
      </ul>

      <ul className="form-group ">
        <li className="mb-2 font-size-18 font-weight-500"><Link to={""}>Email signature genarator</Link></li>
        <li><Link to={""}>Signature for non-profits page</Link></li>
        <li><Link to={""}>Signature for freelancers page</Link></li>
        <li><Link to={""}>Signature for business page</Link></li>
        <li><Link to={""}>Signature for employeers page</Link></li>
      </ul>

      <ul className="form-group ">
        <li  className="mb-2 font-size-18 font-weight-500"><Link to={""}>Support</Link></li>
        <li><Link to={""}>Help center</Link></li>
        <li><Link to={""}>Terms & Conditions</Link></li>
        <li><Link to={""}>Privacy Policy </Link></li>
        <li><Link to={""}>Thirty party tools</Link></li>
      </ul>

      <ul className="form-group ">
        <li  className="mb-2 font-size-18 font-weight-500"><Link to={""}>Company</Link></li>
        <li><Link to={""}>About us</Link></li>
        <li><Link to={""}>Contact us</Link></li>
      </ul>

     </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer
