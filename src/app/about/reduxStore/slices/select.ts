import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface Selected {
  [key: string]: boolean;
  //   [key: string]: boolean;
  //   [key: string]: boolean;
}
const initialState: Selected = {
  "1": false,
  "2": false,
  "3": false,
};

export const selectedSlice = createSlice({
  name: "selectedBtn",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<Selected>) => {
      state["1"] = action.payload["1"];
      state["2"] = action.payload["2"];
      state["3"] = action.payload["3"];
    },
  },
});
export const { setSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
