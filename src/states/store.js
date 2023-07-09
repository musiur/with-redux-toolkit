import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user_slice";

const store = configureStore({
  reducer: {
    userdata: userReducer,
  },
});

export default store;
