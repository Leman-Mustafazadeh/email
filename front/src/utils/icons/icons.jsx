import PropTypes from "prop-types";

export const Icon = ({ icon, color, size }) => {
  const IconElement = icon;
  return <IconElement color={color ?? "#767676"} size={size ?? "24"} />;
};

Icon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.string,
  color: PropTypes.string,
};
