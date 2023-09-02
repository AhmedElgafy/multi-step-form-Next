import { configureStore } from "@reduxjs/toolkit";
import personalInfoState from "./slices/personalInfoState";
import selectReducer from "./slices/selectedBtn";
import planPeriodReducer from "./slices/planPeriod";
import selectedPlan from "./slices/selectedPlan";
import patternState from "./slices/patternState";
import selectedSlice from "./slices/select";

export const store = configureStore({
  reducer: {
    selector: selectReducer,
    planPeriod: planPeriodReducer,
    selectedPlan: selectedPlan,
    patternState: patternState,
    personalInfoState: personalInfoState,
    selected: selectedSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
