import SectionHeader from "../../../../components/common/SectionHeader";
import templatePic_1 from "../../../../assets/images/templates/Frame-2095584510.png";
import templatePic_2 from "../../../../assets/images/templates/Frame 47.png";
import templatePic_3 from "../../../../assets/images/templates/xmas 1.png";
import templatePic_4 from "../../../../assets/images/templates/Template 7.png";
import templatePic_5 from "../../../../assets/images/templates/Frame 47 (1).png";

import "./_style.scss"

const Explore = () => {
  return (
    <div className="explore">
      <SectionHeader header="Explore" />
      <div className="container row explore-templates">
        <div className="col-6 col-lg-4 p-2">
          <img src={templatePic_1} alt="template" />
        </div>
        <div className="col-6 col-lg-4 p-2">
          <img src={templatePic_2} alt="template" />
        </div>
        <div className="col-6 col-lg-4 p-2">
          <img src={templatePic_3} alt="template" />
        </div>
        <div className="col-6 col-lg-4 p-2">
          <img src={templatePic_5} alt="template" />
        </div>

        <div className="col-6 col-lg-4 p-2">
          <img src={templatePic_4} alt="template" />
        </div>

        <div className="col-6 col-lg-4 p-2">
          <img src={templatePic_4} alt="template" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
