import { FETCH_SENDER_IDS } from "../../components/types/index";

const initialState = {
  senderIDs: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SENDER_IDS:
      return {
        ...state,
        senderIDs: action.payload
      };
    default:
      return state;
  }
};
