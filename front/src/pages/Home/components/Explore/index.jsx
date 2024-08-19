import SectionHeader from "../../../../components/common/SectionHeader";
import templatePic_1 from "../../../../assets/images/templates/Frame 2095584510.png";
import templatePic_2 from "../../../../assets/images/templates/Frame 47.png";
import templatePic_3 from "../../../../assets/images/templates/xmas 1.png";
import templatePic_4 from "../../../../assets/images/templates/Template 7.png";
import templatePic_5 from "../../../../assets/images/templates/Frame 47 (1).png";
import templatePic_6 from "../../../../assets/images/templates/Frame 2095584589.png";
import templatePic_7 from "../../../../assets/images/templates/Template 10.png";

import "./_style.scss";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="explore">
      <SectionHeader header="Explore templates" />
      <div className="container ">
       <div className="explore-templates row">
       <div className="col-6 col-lg-4  ">
          <div className=" pr-5 pb-5">
            <img src={templatePic_1} alt="template" />
          </div>
          <div className="pr-5 pb-5">
            <img src={templatePic_5} alt="template" />
          </div>
        </div>

        <div className="col-6 col-lg-4 ">
          <div className="pr-5 pb-5">
            <img src={templatePic_2} alt="template" />
          </div>

          <div className="pr-5 pb-5">
            <img src={templatePic_4} alt="template" />
          </div>

          <div className=" pr-5 pb-5">
            <img src={templatePic_6} alt="template" />
          </div>
        </div>

        <div className="col-6 col-lg-4 ">
          <div className=" pr-5 pb-5">
            <img src={templatePic_3} alt="template" />
          </div>
          <div className=" pr-5 pb-5">
            <img src={templatePic_7} alt="template" />
          </div>
        </div>
       </div>

       <Link to={'/sign-up'}><button className="btn-access font-size-18 font-weight-700 mt-7">Explore template</button></Link>
      </div>
    </div>
  );
};

export default Explore;
