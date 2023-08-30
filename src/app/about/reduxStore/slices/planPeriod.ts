import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface SelectedBtn {
  value: string;
}
const initialState: SelectedBtn = {
  value: "m",
};

export const planPeriodSlice = createSlice({
  name: "planPeriod",
  initialState,
  reducers: {
    setPlanPeriod: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setPlanPeriod } = planPeriodSlice.actions;
export default planPeriodSlice.reducer;
