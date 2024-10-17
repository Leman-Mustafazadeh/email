import SectionHeader from "../../../../components/common/SectionHeader";
import adobe from "../../../../assets/images/brands/adobe.png";
import amazon from "../../../../assets/images/brands/amazon.png";
import ibm from "../../../../assets/images/brands/ibm.png";
import oracle from "../../../../assets/images/brands/oracle.png";
import "./style.scss";
import element from "../../../../assets/images/brands/6.gif"
import { Link } from "react-router-dom";
const Brands = () => {
  return (
    <div className="brands">
      <div className="container">
        <div className="row align-items-center flex-justify-space-between">
          <div className="col-12 col-md-6 left_brand">
            <div className="my-5 text-center">
              <h1 className="font-size-36 font-weight-700 text-primary pb-3">
                FREE Email Signature Generator
              </h1>
              <p className="font-size-18 font-weight-500 pb-4">
                Elevate Your Emails with Custom Designs and Integrated Features.
              </p>
             <div className="btn_now">
           <Link to={'/sign-up'}>  <button className=" btn btn btn-primary mb-3 font-size-20 font-weight-700 text-natural">Start now</button></Link>
             </div>
              <p className="font-size-18 font-weight-500 text-text60 pb-1">Brands that use:</p>
              <div className="brands-logo row justify-content-center">
                <div className="col-6 col-md-3 logo amazon ">
                  <img src={amazon} alt="Amazon" className="img-fluid" />
                </div>
                <div className="col-6 col-md-3 logo mb-3">
                  <img src={oracle} alt="Oracle" className="img-fluid" />
                </div>
                <div className="col-6 col-md-3 logo ibm mb-3">
                  <img src={ibm} alt="IBM" className="img-fluid" />
                </div>
                <div className="col-6 col-md-3 logo mb-3">
                  <img src={adobe} alt="Adobe" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 text-align-end my-4 right_brands">
            <img src={element} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
