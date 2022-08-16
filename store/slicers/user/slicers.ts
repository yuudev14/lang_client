import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../../types/types";
import { loginAction, registerAction } from "./actions";

type userSlicerStatetype = {
  loading: boolean;
  user: userType | {};
};
const initialState: userSlicerStatetype = {
  loading: false,
  user: {},
};

const pending = (state: userSlicerStatetype) => {
  state.loading = true;
};

const rejected = (state: userSlicerStatetype) => {
  state.loading = false;
};

const fulfilled = (
  state: userSlicerStatetype,
  action: PayloadAction<userType>
) => {
  state.loading = true;
  state.user = action.payload;
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerAction.pending, pending);

    builder.addCase(registerAction.fulfilled, fulfilled);

    builder.addCase(registerAction.rejected, rejected);

    builder.addCase(loginAction.pending, pending);

    builder.addCase(loginAction.fulfilled, fulfilled);

    builder.addCase(loginAction.rejected, rejected);
  },
});

export const userReducer = userSlicer.reducer;
