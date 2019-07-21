import {
  SIGN_UP_IS_SUCCESSFUL,
  SIGN_UP_IS_NOT_SUCCESSFUL,
  SIGN_IN_IS_SUCCESSFUL,
  SIGN_IN_IS_NOT_SUCCESSFUL,
  RESET_IS_SUCCESSFUL,
  RESET_IS_NOT_SUCCESSFUL,
  SAVE_LOGGED_IN_USER,
  VERIFICATION_IS_SUCCESSFUL,
  VERIFICATION_IS_NOT_SUCCESSFUL,
  STOP_LOADING,
  START_LOADING
} from "../../components/types/index";
const initialState = {
  isSignUpSuccess: false,
  isLoginSuccess: false,
  isResetSuccessful: false,
  verificationIsSuccess: false,
  currentUser: {},
  isLoading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_IS_SUCCESSFUL:
      return {
        ...state,
        isSignUpSuccess: action.payload
      };
    case SIGN_UP_IS_NOT_SUCCESSFUL:
      return {
        ...state,
        isSignUpSuccess: action.payload
      };
    case SIGN_IN_IS_SUCCESSFUL:
      return {
        ...state,
        isLoginSuccess: action.payload
      };
    case SIGN_IN_IS_NOT_SUCCESSFUL:
      return {
        ...state,
        isLoginSuccess: action.payload
      };
    case RESET_IS_SUCCESSFUL:
      return {
        ...state,
        isResetSuccessful: action.payload
      };
    case RESET_IS_NOT_SUCCESSFUL:
      return {
        ...state,
        isResetSuccessful: action.payload
      };
    case SAVE_LOGGED_IN_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case VERIFICATION_IS_SUCCESSFUL:
      return {
        ...state,
        verificationIsSuccess: action.payload
      };
    case VERIFICATION_IS_NOT_SUCCESSFUL:
      return {
        ...state,
        verificationIsSuccess: action.payload
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};
