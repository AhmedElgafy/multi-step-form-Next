// import { planPeriodSlice } from './patternState';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface PatternState {
  value: string;
}
const initialState: PatternState = {
  value: "m",
};

export const planPeriodSlice = createSlice({
  name: "planPeriod",
  initialState,
  reducers: {
    setPatternState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setPatternState: setPlanPeriod } = planPeriodSlice.actions;
export default planPeriodSlice.reducer;
