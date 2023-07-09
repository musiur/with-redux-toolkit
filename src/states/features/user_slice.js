import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userdata: {
    login: false,
    token: null,
    data: null,
  },
};

export const userSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userdata.login = true;
      state.userdata.token = action.payload.token;
      state.userdata.data = action.payload.data;
    },
    logout: (state) => {
      state.userdata = initialState.userdata;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
