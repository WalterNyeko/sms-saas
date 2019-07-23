import {
  baseURL,
  showErrorNotification,
  showSuccessNotification
} from "../../helpers/index";
import {
  START_LOADING,
  STOP_LOADING,
  FETCH_SENDER_IDS
} from "../../types/index";
import { fetchData } from "../../helpers/index";

export const createSender = senderData => dispatch => {
  const url = `${baseURL}v1/company/buy_sender_id`;
  const key = localStorage.getItem("key");
  const token = localStorage.getItem("token");
  dispatch({
    type: START_LOADING,
    payload: true
  });
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token,
      apiKey: key
    },
    body: JSON.stringify(senderData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.errors) {
        showErrorNotification(data.errors);
      } else {
        showSuccessNotification("Sender ID Created Successfully");
      }
    })
    .catch(error => {})
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
export const getSenders = () => {
  return fetchData("v1/company/list_sender_id", FETCH_SENDER_IDS);
};
