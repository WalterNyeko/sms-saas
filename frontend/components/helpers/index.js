import { notification } from "antd";

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
const addToLocalStorage = (key, item) => {
  localStorage.setItem(key, item);
};
export default addToLocalStorage;

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
