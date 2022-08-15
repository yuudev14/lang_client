import { createSlice } from "@reduxjs/toolkit";
import { registerAction } from "./actions";

const initialState = {
  loading: false,
  userData: {},
};
const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });

    builder.addCase(registerAction.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const userReducer = userSlicer.reducer;
