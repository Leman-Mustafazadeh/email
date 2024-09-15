import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PageHeader from "../../../../components/common/PageHeader";
import template from "../../../../assets/images/templates/Template 10.png";
import xmas from "../../../../assets/images/templates/xmas 1.png";
import "./_header.scss";

function CommonHeader({ header, paragraph }) {
  return (
    <div>
      <div className="container common-header text-align-center">
        <PageHeader header={header} />
        <p>{paragraph}</p>
        <Link to="">
          <button className="btn bg-primary text-natural">Get Started</button>
        </Link>
      </div>

      <div className="container row template-banners gap-5" style={{flexWrap: "nowrap"}}>
        <div className="col-12 col-md-6 col-lg-4">
          <img src={xmas} alt="" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <img src={template} alt="" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <img src={xmas} alt="" />
        </div>
      </div>
    </div>
  );
}

CommonHeader.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
};

export default CommonHeader;
