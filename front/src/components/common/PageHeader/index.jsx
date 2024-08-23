import PropTypes from "prop-types";
import "./_style.scss";

function PageHeader({ header, fontSize }) {
  const appliedFontSize = `${fontSize}px` || "36px";

  return (
    <div className="page-header">
      <h1 style={{ fontSize: appliedFontSize }}>{header}</h1>
    </div>
  );
}

PageHeader.propTypes = {
  header: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

export default PageHeader;
