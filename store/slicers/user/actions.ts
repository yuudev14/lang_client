import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { registerFormStateType } from "../../../pages/register";
import { post } from "../../../utils/requests";

export const registerAction = createAsyncThunk(
  "user/registerAction",
  async (data: registerFormStateType, { rejectWithValue }) => {
    try {
      const response = await post("/api/auth/register", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
