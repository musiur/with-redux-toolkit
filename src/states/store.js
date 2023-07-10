import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user_slice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./services/users";

const store = configureStore({
  reducer: {
    userdata: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export default store;
