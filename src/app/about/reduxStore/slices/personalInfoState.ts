import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
export interface PersonalInfoStateType {
  name: string;
  email: string;
  phoneNum: string;
}
const initialState: PersonalInfoStateType = {
  name: "",
  email: "",
  phoneNum: "",
};

export const personalInfoState = createSlice({
  name: "planPeriod",
  initialState,
  reducers: {
    setPersonalInfoState: (
      state,
      action: PayloadAction<PersonalInfoStateType>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNum = action.payload.phoneNum;
    },
  },
});
export const { setPersonalInfoState } = personalInfoState.actions;
export default personalInfoState.reducer;
