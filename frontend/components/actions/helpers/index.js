import {
  SIGN_UP_IS_SUCCESSFUL,
  SIGN_UP_IS_NOT_SUCCESSFUL,
  SIGN_IN_IS_SUCCESSFUL,
  SIGN_IN_IS_NOT_SUCCESSFUL,
  RESET_IS_SUCCESSFUL,
  RESET_IS_NOT_SUCCESSFUL,
  VERIFICATION_IS_SUCCESSFUL,
  VERIFICATION_IS_NOT_SUCCESSFUL
} from "../../types/index";
import {
  showErrorNotification,
  showSuccessNotification
} from "../../helpers/index";
export const signUpIsSuccessful = message => dispatch => {
  dispatch({
    type: SIGN_UP_IS_SUCCESSFUL,
    payload: true
  });
  showSuccessNotification(message);
};

export const signUpIsNotSuccessful = error => dispatch => {
  dispatch({
    type: SIGN_UP_IS_NOT_SUCCESSFUL,
    payload: false
  });
  showErrorNotification(error);
};

export const signInIsSuccessful = message => dispatch => {
  dispatch({
    type: SIGN_IN_IS_SUCCESSFUL,
    payload: true
  });
  showSuccessNotification(message);
};

export const signInIsNotSuccessful = error => dispatch => {
  dispatch({
    type: SIGN_IN_IS_NOT_SUCCESSFUL,
    payload: false
  });
  showErrorNotification(error);
};

export const resetIsSuccessful = message => dispatch => {
  dispatch({
    type: RESET_IS_SUCCESSFUL,
    payload: false
  });
  showSuccessNotification(message);
};

export const resetIsNotSuccessful = error => dispatch => {
  dispatch({
    type: RESET_IS_NOT_SUCCESSFUL,
    payload: false
  });
  showErrorNotification(error);
};

export const verificationIsSuccessful = message => dispatch => {
  dispatch({
    type: VERIFICATION_IS_SUCCESSFUL,
    payload: false
  });
  showSuccessNotification(message);
};

export const verificationIsNotSuccessful = error => dispatch => {
  dispatch({
    type: VERIFICATION_IS_NOT_SUCCESSFUL,
    payload: false
  });
  showErrorNotification(error);
};
