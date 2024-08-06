import SectionHeader from "../../../common/SectionHeader";
import adobe from "../../../../assets/images/brands/adobe.png";
import amazon from "../../../../assets/images/brands/amazon.png";
import ibm from "../../../../assets/images/brands/ibm.png";
import oracle from "../../../../assets/images/brands/oracle.png";
import "./style.scss"

const Brands = () => {
  return (
    <div className="brands">
      <SectionHeader header="Top brands that use email signature" />
      <div className="container my-5">
        <div className="brands-logo row">
          <div className="col-12 col-md-6 col-lg-3 logo">
            <img src={amazon} alt="amazon" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 logo">
            <img src={oracle} alt="oracle" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 logo">
            <img src={ibm} alt="ibm" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 logo">
            <img src={adobe} alt="adobe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
