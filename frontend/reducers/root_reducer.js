import { combineReducers } from "redux";
import authReducer from "./auth/auth";
import senderIDReducer from "./senders/senders";
import messagesReducer from "./messages/messages";

const RootReducer = combineReducers({
  authRequest: authReducer,
  senderReducer: senderIDReducer,
  recentMessages: messagesReducer
});

export default RootReducer;
