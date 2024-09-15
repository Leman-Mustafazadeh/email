import PropTypes from "prop-types";

function Banner({ size, color }) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="24"
          height="16.7273"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeDasharray="1.31 1.97"
        />
        <rect
          x="1"
          y="19.9092"
          width="24"
          height="5.09091"
          rx="0.657143"
          stroke={color}
        />
      </svg>
    </div>
  );
}

Banner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Banner;
