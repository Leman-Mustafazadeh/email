import PropTypes from "prop-types";

function Template({ size, color }) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="23.0383"
          height="6.00998"
          rx="1.15"
          stroke={color}
          strokeWidth="1.495"
        />
        <rect
          x="1"
          y="10.6161"
          width="6.71951"
          height="14.424"
          rx="1.15"
          stroke={color}
          strokeWidth="1.495"
        />
        <rect
          x="10.5974"
          y="10.6161"
          width="13.439"
          height="14.424"
          rx="1.15"
          stroke={color}
          strokeWidth="1.495"
        />
      </svg>
    </div>
  );
}

Template.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Template;
