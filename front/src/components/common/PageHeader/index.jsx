import PropTypes from "prop-types";
import "./_style.scss";

function PageHeader({ header }) {
  return (
    <div className="page-header">
      <h1>{header}</h1>
    </div>
  );
}

PageHeader.propTypes = {
  header: PropTypes.string,
};

export default PageHeader;
