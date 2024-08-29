import PropTypes from "prop-types";
import "./_style.scss";

function SectionHeader({ header, paragpaph }) {
  return (
    <div className="section-header container col-12">
      <h2>{header}</h2>
      <p>{paragpaph}</p>
    </div>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string,
  paragpaph: PropTypes.string,
};

export default SectionHeader;
