/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import AuthInput from "../../components/input/AuthInput";
import { checkNull } from "../../utils/helpers/validation";
import { authLogin } from "./signin.action";
import { errorMessage, isAuthenticated } from "./signin.selector";

const initialValues = {
  username: "",
  password: "",
};

const Signin = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const authError = useSelector(errorMessage());
  const userAuthenticated = useSelector(isAuthenticated());

  const validate = {
    username: checkNull,
    password: checkNull,
  };
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value: newValue } = event.target;

    setValues({
      ...values,
      [name]: newValue,
    });

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    const { [name]: removedError, ...rest } = errors;

    const error = validate[name](name, value);

    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](key, values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      },
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);
    if (
      !Object.values(formValidation.errors).length
      && Object.values(formValidation.touched).length
        === Object.values(values).length
      && Object.values(formValidation.touched).every((t) => t === true)
    ) {
      dispatch(authLogin(values, history));
    }
  };

  if (userAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="my-10">
      <section>
        <div>
          <div className="md:w-3/6 lg:w-1/3 mx-auto signup-form px-6 lg:px-10 py-12">
            <div className="mb-10 text-center">
              <h3 className="text-4xl text-black-500 font-bold">Welcome!</h3>
              {authError ? (
                <h5 className="text-white bg-red-500 py-3 my-6">{authError}</h5>
              ) : (
                <h5 className="font-bold my-5">
                  Login using your account details.
                </h5>
              )}
            </div>
            <form onSubmit={handleSubmit} data-testid="signinForm">
              <AuthInput
                label="Username"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                touched={touched?.username}
                value={values?.username}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors?.username}
                inputType="text"
                requestError={[]}
              />

              <AuthInput
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                touched={touched?.password}
                value={values?.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors?.password}
                inputType="password"
                showPassword={showPassword}
                handleShowPassword={showPasswordHandler}
                requestError={null}
              />
              <div className="my-6">
                <Button
                  submitType
                  buttonText="Sign in"
                  // handleClick={handleSubmit}
                  customClass="bg-blue-500 text-white py-4 w-full"
                />
              </div>
              <div className="text-start mb-6">
                <Link to="/" className="text-blue-800">
                  Forgot your password?
                </Link>
              </div>
              <div className="mb-6">
                Need An Account?
                <Link to="/register" className="ml-2 text-blue-800">
                  Sign Up Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
