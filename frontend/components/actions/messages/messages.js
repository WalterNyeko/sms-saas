import { FETCH_RECENT_MESSAGES, FETCH_AVAILABLE_BALANCE } from "../../types/index";
import { fetchData } from "../../helpers/index";
/**
 * fetches all Recent Messages of the logged in user
 *
 * @returns {Array}
 */
export const getRecentMessages = () => {
  return fetchData("v1/company/view_messages/savage", FETCH_RECENT_MESSAGES);
};


/**
 * fetches all Recent Messages of the logged in user
 *
 * @returns {Array}
 */
export const getAvailableBalance = () => {
  return fetchData("v1/company/get_balances", FETCH_AVAILABLE_BALANCE);
};