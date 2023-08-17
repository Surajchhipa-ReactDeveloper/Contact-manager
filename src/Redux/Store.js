import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { LOGIN_API } from "./api/login/login.api";
import { REGISTER_API } from "./api/Register/Register.api";
import { GET_USER } from "./api/SingleUser/Single.api";

const combineReducer = combineReducers({
  [LOGIN_API.reducerPath]: LOGIN_API.reducer,
  [REGISTER_API.reducerPath]: REGISTER_API.reducer,
  [GET_USER.reducerPath]: GET_USER.reducer,
});

const Store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      LOGIN_API.middleware,
      REGISTER_API.middleware,
      GET_USER.middleware
    ),
});
export default Store;
