import { notification } from "antd";
import { STOP_LOADING, START_LOADING } from "../types/index";

export const baseURL = "https://batchpackapplication.herokuapp.com/";

/**
 * ensures that an item can be added to localStorage
 * at any time without having to repeat localStorage.setItem()
 * everytime
 *
 * @param {String} key
 * @param {String} item
 *
 * @returns {void}
 */
export const addToLocalStorage = (key, item) => {
  localStorage.setItem(key, item);
};

/**
 * ensures that an item can be fetched from localStorage
 * at any time without having to repeat localStorage.getItem()
 * everytime
 *
 * @param {String} key
 * @param {String} item
 *
 * @returns {void}
 */
export const getItemFromLocalStorage = key => {
  localStorage.getItem(key);
};

/**
 * ensures that we can render a success message to the user
 * after their requests for particular resources were successful
 *
 * @param {String} message
 *
 * @returns {void}
 */
export const showSuccessNotification = message => {
  const data = {
    message: message,
    description: "Successful request",
    duration: 5
  };
  notification.success(data);
};

/**
 * ensures that we can render an error message to the user
 * after their requests for particular resources were not successful
 *
 * @param {String} message
 *
 * @returns {void}
 */
export const showErrorNotification = message => {
  const data = {
    message: message,
    description: "Error occured, please check the error and try again",
    duration: 8
  };
  notification.error(data);
};

export const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = re.test(String(email).toLowerCase());
  return result;
};

/**
 * retrieves all the required information from the database
 * connects the action to redux store and stores the content in the store
 *
 * @param {String} url
 * @param {String} type
 * @param {Object} dispatch
 *
 * @returns {Array}
 */
export const fetchData = (url, type) => dispatch => {
  dispatch({
    type: START_LOADING,
    payload: true
  });
  const finalUrl = baseURL + url;
  const jwtToken = localStorage.getItem("token");
  const key = localStorage.getItem("key");
  fetch(finalUrl, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: jwtToken,
      apiKey: key
    }
  })
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type,
        payload: data
      });
    })
    .finally(done => {
      dispatch({
        type: STOP_LOADING,
        payload: false
      });
    });
};

/**
 * Format UTC date time to
 * MM-DD-YY format
 *
 * @param {string} dateString
 *
 * @return {string}
 */
export const formatDate = dateString => {
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date(dateString);
  return `${
    allMonths[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};
