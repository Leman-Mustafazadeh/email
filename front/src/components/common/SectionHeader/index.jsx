import PropTypes from "prop-types";
import "./_style.scss"

function SectionHeader({ header }) {
  return (
    <div className="section-header">
      <h2>{header}</h2>
    </div>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string,
};

export default SectionHeader;
