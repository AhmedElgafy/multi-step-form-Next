import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface SelectedBtn {
  value: string;
}
const initialState: SelectedBtn = {
  value: "1",
};

export const selectedPlanSlice = createSlice({
  name: "selectedPlan",
  initialState,
  reducers: {
    setSelectedPlan: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setSelectedPlan } = selectedPlanSlice.actions;
export default selectedPlanSlice.reducer;
