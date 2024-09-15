import PropTypes from "prop-types";

function User({ size, color }) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 21 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6586 16.1777C6.09547 16.1777 1 19.889 1 24.4496M10.6586 12.0468C11.7518 12.0491 12.8211 11.7272 13.7315 11.1219C14.6418 10.5166 15.3523 9.65501 15.7731 8.64602C16.0878 7.89161 16.231 7.07672 16.1924 6.26022C16.1538 5.44371 15.9344 4.64597 15.5499 3.9246C15.1654 3.20324 14.6256 2.57626 13.9693 2.08895C13.313 1.60164 12.5567 1.26616 11.755 1.10675C10.9534 0.946912 10.1264 0.966783 9.33342 1.16493C8.54046 1.36308 7.80128 1.73457 7.16911 2.25267C6.53695 2.77077 6.02751 3.42258 5.67748 4.16119C5.32745 4.8998 5.14554 5.70682 5.14483 6.52417C5.14449 7.98743 5.72501 9.39099 6.75886 10.4265C7.79271 11.462 9.19533 12.0448 10.6586 12.0468Z"
          stroke={color}
          strokeWidth="1.9013"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1885 16.5123V24.1137M12.3948 20.3213H20"
          stroke={color}
          strokeWidth="1.9013"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

User.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default User;
