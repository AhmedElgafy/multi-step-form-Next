import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface SelectedBtn {
  value: number;
}
const initialState: SelectedBtn = {
  value: 1,
};

export const selectedBtnSlice = createSlice({
  name: "selectedBtn",
  initialState,
  reducers: {
    setSelectedBtn: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});
export const { setSelectedBtn } = selectedBtnSlice.actions;
export default selectedBtnSlice.reducer;
