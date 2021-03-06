import PropTypes from "prop-types";

const Button = ({
  buttonText,
  submitType,
  handleClick,
  customClass,
  children,
}) => (
  <button
    onClick={handleClick}
    className={customClass}
    type={submitType ? "submit" : "button"}
  >
    {buttonText}
    {children}
  </button>
);

Button.defaultProps = {
  submitType: false,
  children: "",
  handleClick: () => {},
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  customClass: PropTypes.string.isRequired,
  children: PropTypes.node,
  submitType: PropTypes.bool,
};

export default Button;
