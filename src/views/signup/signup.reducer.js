import { updateObject } from "../../utils/helpers/helper";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_START,
  USER_LOGIN_START,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_RELOAD_SUCCESS,
} from "../../store/actionTypes";

const initialState = {
  error: null,
  token: null,
  loading: false,
  username: null,
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
    username: null,
    isAuthenticated: false,
    token: null,
    message: "Registration Successful, login to continue",
  });

const userSignupFail = (state, action) => updateObject(state, {
  error: action.authError,
  loading: false,
});

const loginStart = (state) => updateObject(state, {
  loading: true,
  error: null,
});

const loginSuccess = (state, action) => {
  const { username, token } = action.data;
  return updateObject(state, {
    username,
    loading: false,
    token,
    isAuthenticated: true,
    error: null,
  });
};

const loginFail = (state, action) => updateObject(state, {
  error: action.authError,
  loading: false,
});

const reloadSessionSuccess = (state, action) => {
  const { username, token } = action.data;
  return updateObject(state, {
    username,
    loading: false,
    token,
    isAuthenticated: true,
    error: null,
  });
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_START:
      return userSignupStart(state, action);
    case USER_SIGNUP_SUCCESS:
      return userSignupSuccess(state, action);
    case USER_SIGNUP_FAIL:
      return userSignupFail(state, action);
    case USER_LOGIN_START:
      return loginStart(state, action);
    case USER_LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case USER_LOGIN_FAIL:
      return loginFail(state, action);
    case USER_RELOAD_SUCCESS:
      return reloadSessionSuccess(state, action);

    default:
      return state;
  }
};

export default authentication;
