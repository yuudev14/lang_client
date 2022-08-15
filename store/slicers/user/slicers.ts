import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const userReducer = userSlicer.reducer;
