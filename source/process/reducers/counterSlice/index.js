import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const increment = (state) => {
  state.count += 1;
};

const decrement = (state) => {
  state.count -= 1;
};

const resetCounter = (state) => {
  state.count = 0;
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    decrement,
    increment,
    resetCounter,
  },
});

export const counterSliceActions = counterSlice.actions;

export const counterSliceTypes = {
  decrement: counterSlice.actions.decrement.type,
  increment: counterSlice.actions.increment.type,
  resetCounter: counterSlice.actions.resetCounter.type,
};

export default counterSlice.reducer;
