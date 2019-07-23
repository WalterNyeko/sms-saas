import {
  FETCH_RECENT_MESSAGES,
  FETCH_AVAILABLE_BALANCE
} from "../../components/types/index";

const initialState = {
  recentMessages: [],
  availableBalance: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECENT_MESSAGES:
      return {
        ...state,
        recentMessages: action.payload
      };
    case FETCH_AVAILABLE_BALANCE:
      return {
        ...state,
        availableBalance: action.payload
      };
    default:
      return state;
  }
};
