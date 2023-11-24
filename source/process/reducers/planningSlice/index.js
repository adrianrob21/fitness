import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const updateProps = (state, action) => {
  return { ...state, ...action.payload };
};

const reset = () => initialState;

export const planningSlice = createSlice({
  name: 'planningSlice',
  initialState,
  reducers: {
    reset,
    updateProps
  }
});

export const planningSliceActions = planningSlice.actions;

export const planningSliceTypes = {
  reset: planningSlice.actions.reset.type,
  updateProps: planningSlice.actions.updateProps.type
};

export default planningSlice.reducer;
