import {
  userLogin,
} from "../../utils/requests/authentication";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_RELOAD_SUCCESS,
  USER_LOGOUT,
} from "../../store/actionTypes";

export const userLoginStart = () => ({
  type: USER_LOGIN_START,
});

export const userLoginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  data,
});

export const userLoginFailed = (authError) => ({
  type: USER_LOGIN_FAIL,
  authError,
});

export const reloadSessionSuccess = (data) => ({
  type: USER_RELOAD_SUCCESS,
  data,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const authLogin = (userDetail, history, previousLocation) =>
  async (dispatch) => {
    dispatch(userLoginStart());

    return userLogin(userDetail)
      .then(async (response) => {
        const { token } = response;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("username", JSON.stringify(userDetail.username));
        const data = {
          token,
          username: userDetail.username,
        };
        await dispatch(userLoginSuccess(data));
        if (previousLocation) {
          setTimeout(() => {
            history.push(previousLocation);
          }, 5000);
        } else {
          setTimeout(() => {
            history.push("/");
          }, 5000);
        }
      })
      .catch(() => {
        dispatch(userLoginFailed("username/password incorrect"));
      });
  };

export const reloadSession = (user) => async (dispatch) => {
  try {
    // const user = await getUser();
    dispatch(reloadSessionSuccess(user));
  } catch (error) {
    dispatch(userLoginFailed("error"));
  }
};

export const logout = () => {
  // remove token
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  return (dispatch) => {
    dispatch(userLogout());
  };
};
