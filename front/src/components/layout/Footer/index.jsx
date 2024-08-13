import { Link } from "react-router-dom"
import "./_style.scss"
const Footer = () => {
  return (
  <footer className="py-10 ">
    <div className="container">
    <div>
     <div className="row flex-justify-space-between ">
      <ul className="form-group ">
        <li className="mb-2"><a href=""  className="font-size- font-weight-500 text-natural "><Link to={""}>Solutions</Link></a></li>
        <li><Link to={""} className="font-size-16 text-natural">Email signature genarator</Link></li>
        <li><Link to={""} className="font-size-16 text-natural">Email signature </Link></li>
        <li><Link to={""} className="font-size-16 text-natural">Pricing</Link></li>
        <li><Link to={""} className="font-size-16 text-natural">API</Link></li>
      </ul>

      <ul className="form-group ">
        <li className="mb-2"><Link to={""}>Email signature genarator</Link></li>
        <li><Link to={""}>Signature for non-profits page</Link></li>
        <li><Link to={""}>Signature for freelancers page</Link></li>
        <li><Link to={""}>Signature for business page</Link></li>
        <li><Link to={""}>Signature for employeers page</Link></li>
      </ul>

      <ul className="form-group ">
        <li className="mb-2"><a href="" className="font-size- font-weight-500 text-natural"><Link to={""}>Support</Link></a></li>
        <li><Link to={""} className="font-size-16 text-natural">Help center</Link></li>
        <li><Link to={""} className="font-size-16 text-natural">Terms & Conditions</Link></li>
        <li><Link to={""} className="font-size-16 text-natural">Privacy Policy </Link></li>
        <li><Link to={""} className="font-size-16 text-natural">Thirty party tools</Link></li>
        <li><Link to={""} className="font-size-16 text-natural">Cookies policy</Link></li>
        <li><Link to={""} className="font-size-16 text-natural">GDRP</Link></li>
      </ul>

      <ul className="form-group ">
        <li className="mb-2"><a href="" className="font-size- font-weight-500 text-natural"><Link to={""}>Company</Link></a></li>
        <li><Link to={""} className="font-size-16 text-natural">About us</Link></li>
        <li><Link to={""} className="font-size-16 text-natural">Contact us</Link></li>
      </ul>

     </div>
    </div>
    </div>
  </footer>
  )
}

export default Footer
