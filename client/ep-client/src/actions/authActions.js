import {notification} from "antd";
//Login action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//Signup action types
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

//Logout action types
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

//Verification action types
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

//Password Reset action types
export const SEND_PASS_RESET = "SEND_PASS_RESET";
export const SEND_PASS_RESET_ERROR = "SEND_PASS_RESET_ERROR";
export const SEND_PASS_RESET_SUCCESS = "SEND_PASS_RESET_SUCCESS";

export const USER_ACCOUNT_CREATED = "USER_ACCOUNT_CREATED";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const receiveLogin = (user, profileID) => {
  return {
    type: LOGIN_SUCCESS,
    user,
    profileID,
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

const requestsignup = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};

const receiveSignup = (user) => {
  return {
    type: SIGN_UP_SUCCESS,
    user,
  };
};

const signupError = (errMess) => {
  return {
    type: SIGN_UP_FAILURE,
    errMess,
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};

const sendingPassReset = () => {
  return {
    type: SEND_PASS_RESET,
  };
};

const sendPassResetError = (errMess) => {
  return {
    type: SEND_PASS_RESET_ERROR,
    errMess,
  };
};

const sendPassResetSuccess = () => {
  return {
    type: SEND_PASS_RESET_SUCCESS,
  };
};

const userAccountCreated = () => {
  return {
    type: USER_ACCOUNT_CREATED,
  };
};

const openLoginErrorNotification = () => {
  const args = {
    message: "Error!",
    description:
      "Invalid Username or Password.",
    duration: 3,
  };
  notification.open(args);
};

const openSignupErrorNotification = () => {
  const args = {
    message: "Error!",
    description:
      "Email Address aready in use. Try a new one.",
    duration: 3,
  };
  notification.open(args);
};

export const loginUser = (values) => (dispatch) => {
  dispatch(requestLogin());
   
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },

    body: JSON.stringify(values),
  };
  fetch("/user/login", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("hellooo");
      if (data.token) {
        console.log("hellooo");
        localStorage.setItem("token", `Bearer ${data.token}`);
        localStorage.setItem("userProfile", JSON.stringify(data.payload.user));
        localStorage.setItem("profileID", data.payload.profileID);
        dispatch(receiveLogin(data.payload.user, data.payload.profileID));
      }
      else {
        openLoginErrorNotification();
        dispatch(loginError());
      }
    })
    .catch((error) => {
      openLoginErrorNotification();
      dispatch(loginError());
    });
};

export const signUpUser = (values) => (dispatch) => {
  dispatch(requestsignup());

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };
  fetch("/user/signup", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        dispatch(receiveSignup(data.user));
      }
      else
      {
        openSignupErrorNotification();
        dispatch(signupError());
      }
    })
    .catch((error) => {
      console.log(error)
      dispatch(signupError());
    });
};

export const accountCreated = () => (dispatch) => {
  dispatch(userAccountCreated());
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  dispatch(receiveLogout());
};