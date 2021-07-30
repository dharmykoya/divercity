import {
  registerUser,
} from "../../utils/requests/authentication";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_START,
} from "../../store/actionTypes";
import { toastSuccess } from "../../utils/helpers/helper";

export const userSignupStart = () => ({
  type: USER_SIGNUP_START,
});

export const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS,
});

export const userSignupFailed = (authError) => ({
  type: USER_SIGNUP_FAIL,
  authError,
});

export const authSignup = (userDetails, history) => (dispatch) => {
  dispatch(userSignupStart());
  return registerUser(userDetails)
    .then(async () => {
      dispatch(userSignupSuccess());
      toastSuccess("Login Successful");
      history.push("/login");
    })
    .catch(() => {
      // Promise.resolve(error.data).then((err) => {
      //   console.log(87, err);
      //   dispatch(userSignupFailed(err));
      // });
      dispatch(userSignupFailed("Invalid credentials provided"));
    });
};
