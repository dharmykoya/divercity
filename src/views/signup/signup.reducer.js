import { updateObject } from "../../utils/helpers/helper";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_START,
} from "../../store/actionTypes";

const initialState = {
  error: null,
  token: null,
  loading: false,
  user: null,
  refreshToken: null,
  isAuthenticated: false,
  message: null,
};

const userSignupStart = (state) => updateObject(state, {
  loading: true,
  error: null,
});

const userSignupSuccess = (state) =>
  updateObject(state, {
    error: null,
    loading: false,
    user: null,
    refreshToken: null,
    isAuthenticated: false,
    token: null,
    message: "Registration Successful, login to continue",
  });

const userSignupFail = (state, action) => updateObject(state, {
  error: action.authError,
  loading: false,
});

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_START:
      return userSignupStart(state, action);
    case USER_SIGNUP_SUCCESS:
      return userSignupSuccess(state, action);
    case USER_SIGNUP_FAIL:
      return userSignupFail(state, action);

    default:
      return state;
  }
};

export default authentication;
