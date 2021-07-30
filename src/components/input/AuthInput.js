import PropTypes from "prop-types";
import { ExclamationCircleIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

const AuthInput = ({
  label,
  type,
  name,
  placeholder,
  error,
  handleBlur,
  handleChange,
  touched,
  value,
  inputType,
  requestError,
  showPassword,
  handleShowPassword,
  ...props
}) => {
  let inputClass = "border py-4 px-2 w-full";
  if (error || requestError) {
    inputClass = `${inputClass} input-error`;
  }
  return (
    <div className="mb-3">
      <div className="grid">
        <label htmlFor={name} className="mb-4" aria-controls="4">
          {label}
        </label>
        <div className="relative w-full">
          <input
            type={type}
            className={inputClass}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            name={name}
            onBlur={handleBlur}
            {...props}
          />
          {error || requestError?.length ? (
            <ExclamationCircleIcon className="h-10 w-10 absolute text-red-500 right-4 bottom-4" />
          ) : (
            ""
          )}
          {inputType === "password"
          && showPassword
          && !requestError
          && !error ? (
            <EyeIcon
              onClick={handleShowPassword}
              className="h-10 w-10 absolute text-gray-500 right-4 bottom-4"
            />
            ) : (
              ""
            )}
          {inputType === "password"
          && !showPassword
          && !requestError
          && !error ? (
            <EyeOffIcon
              onClick={handleShowPassword}
              className="h-10 w-10 absolute text-gray-500 right-4 bottom-4"
            />
            ) : (
              ""
            )}
        </div>
      </div>
      <div className="text-start text-red-500">{error}</div>
      {/* {requestError?.map((err, index) => (
        <div key={index + 1} className="text-start text-danger text-10">
          {err}
        </div>
      ))} */}
    </div>
  );
};

AuthInput.defaultProps = {
  requestError: [],
  showPassword: false,
  error: "",
  handleShowPassword: () => {},
};

AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  requestError: PropTypes.array,
  showPassword: PropTypes.bool,
  handleShowPassword: PropTypes.func,
};

export default AuthInput;
