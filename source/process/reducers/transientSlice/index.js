import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const updateProps = (state, action) => {
  return { ...state, ...action.payload };
};

export const transientSlice = createSlice({
  name: "transientSlice",
  initialState,
  reducers: {
    updateProps,
  },
});

export const transientSliceActions = transientSlice.actions;

export const transientSliceTypes = {
  updateProps: transientSlice.actions.updateProps.type,
};

export default transientSlice.reducer;
