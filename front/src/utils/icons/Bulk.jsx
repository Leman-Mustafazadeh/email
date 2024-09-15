import PropTypes from "prop-types";

function Bulk({ size, color }) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7.85987L12.9943 1"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 7.85986L13 14.717"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 18.1456L13 25.0028"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 1.00281L25 7.85995"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 14.717L25 7.85986"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 25.0028L25 18.1456"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 13.0028L13 19.86"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 19.8599L24.9943 13.0029"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 13.0028L5.50342 10.4327"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 18.1456L5.5035 15.5732"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.9946 13.003L20.4968 10.433"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.0004 18.1456L20.4968 15.5731"
          stroke={color}
          strokeWidth="1.51"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

Bulk.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Bulk;
