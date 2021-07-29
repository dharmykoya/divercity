import PropTypes from "prop-types";

const Button = ({ buttonText, handleClick }) => (
  <button
    onClick={handleClick}
    className="bg-blue-500 text-white text-base font-bold px-6 py-2 rounded-lg"
    type="button"
  >
    {buttonText}
  </button>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
