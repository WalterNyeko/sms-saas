import { combineReducers } from "redux";
import authReducer from "./auth/auth";

const RootReducer = combineReducers({
  authRequest: authReducer
});

export default RootReducer;
