import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const updateProps = (state, action) => {
  return { ...state, ...action.payload };
};

const reset = () => initialState;

export const transientSlice = createSlice({
  name: 'transientSlice',
  initialState,
  reducers: {
    updateProps,
    reset
  }
});

export const transientSliceActions = transientSlice.actions;

export const transientSliceTypes = {
  reset: transientSlice.actions.reset.type,
  updateProps: transientSlice.actions.updateProps.type
};

export default transientSlice.reducer;
