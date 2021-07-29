import PropTypes from "prop-types";

const Button = ({
  buttonText, submitType, handleClick, customClass,
}) => (
  <button
    onClick={handleClick}
    className={customClass}
    type={submitType ? "submit" : "button"}
  >
    {buttonText}
  </button>
);

Button.defaultProps = {
  submitType: false,
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  customClass: PropTypes.string.isRequired,
  submitType: PropTypes.bool,
};

export default Button;
