import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
export interface SelectedBtn {
  name: boolean;
  email: boolean;
  phoneNum: boolean;
  isAllTrue(): boolean;
}
const initialState: SelectedBtn = {
  name: true,
  email: true,
  phoneNum: true,
  isAllTrue(): boolean {
    return this.name && this.email && this.phoneNum;
  },
};

export const planPeriodSlice = createSlice({
  name: "planPeriod",
  initialState,
  reducers: {
    setPatternState: (state, action: PayloadAction<SelectedBtn>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNum = action.payload.phoneNum;
    },
  },
});
export const { setPatternState } = planPeriodSlice.actions;
export default planPeriodSlice.reducer;
