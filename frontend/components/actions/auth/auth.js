import { baseURL } from "../../helpers";
import axios from "axios";
import {
  signUpIsSuccessful,
  signUpIsNotSuccessful,
  signInIsSuccessful,
  signInIsNotSuccessful,
  resetIsSuccessful,
  resetIsNotSuccessful,
  verificationIsSuccessful,
  verificationIsNotSuccessful
} from "../helpers/index";
import {
  SAVE_LOGGED_IN_USER,
  STOP_LOADING,
  START_LOADING,
  FETCH_USER_DETAILS
} from "../../types/index";
import history from "../../helpers/history";
import Routes from "../../helpers/routes";
import { addToLocalStorage } from "../../helpers/index";
import { fetchData } from "../../helpers/index";

export const signin = userInfo => dispatch => {
  const url = `${baseURL}auth/login`;
  dispatch({
    type: START_LOADING,
    payload: true
  });
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        dispatch(signInIsSuccessful(`Welcome to batchpack, ${data.username}`));
        dispatch({
          type: SAVE_LOGGED_IN_USER,
          payload: data
        });
        addToLocalStorage("key", data.apikey);
        addToLocalStorage("token", data.token);
        history.push("/dashboard");
      } else if (data.error) {
        dispatch(signInIsNotSuccessful("Invalid user credentials provided"));
      }
    })
    .catch(error => {
      dispatch(signInIsNotSuccessful("Sign in was not successful"));
    })
    .finally(done => {
      dispatch({
        type: STOP_LOADING,
        payload: false
      });
    });
};

export const signup = userInfo => dispatch => {
  const url = `${baseURL}users/`;
  dispatch({
    type: START_LOADING,
    payload: true
  });
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(signUpIsSuccessful(data.message));
      addToLocalStorage("code", userInfo.country_code);
      addToLocalStorage("phone", userInfo.phone);
      history.push(`${Routes.verifyToken}`);
    })
    .catch(error => {
      console.log(error);
      dispatch(signUpIsNotSuccessful("Signup was not successful"));
    })
    .finally(done => {
      dispatch({
        type: STOP_LOADING,
        payload: false
      });
    });
};

export const resetPassword = userInfo => dispatch => {
  const url = `${baseURL}auth/update_password`;
  dispatch({
    type: START_LOADING,
    payload: true
  });
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      if (data) {
        dispatch(resetIsSuccessful("Password successfully reset, login now"));
        history.push(`${Routes.signin}`);
      } else {
        dispatch(resetIsNotSuccessful("Password reset failed"));
      }
    })
    .catch(error => {
      dispatch(resetIsNotSuccessful("Password reset failed"));
    })
    .finally(done => {
      dispatch({
        type: STOP_LOADING,
        payload: false
      });
    });
};

export const verifyOtp = userInfo => dispatch => {
  const url = `${baseURL}verify`;
  console.log(userInfo);
  dispatch({
    type: START_LOADING,
    payload: true
  });
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        dispatch(
          verificationIsSuccessful(
            "OTP verification was successful, you can now login"
          )
        );
        history.push(`${Routes.signin}`);
      } else {
        dispatch(verificationIsNotSuccessful(data.message));
      }
    })
    .catch(error => {
      dispatch(verificationIsNotSuccessful("OTP verification failed"));
    })
    .finally(done => {
      dispatch({
        type: STOP_LOADING,
        payload: false
      });
    });
};

/**
 * fetches all Sender IDs of the logged in user
 *
 * @returns {Array}
 */
export const getUserDetails = () => {
  return fetchData("users/", FETCH_USER_DETAILS);
};
