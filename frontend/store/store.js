import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Logger with default options for debugging
import logger from "redux-logger";

import RootReducer from "../reducers/root_reducer";

const middlewares = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

export default configureStore;
