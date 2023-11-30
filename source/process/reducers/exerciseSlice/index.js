import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  series: {}
};

const reset = () => initialState;

const updateProps = (state, action) => {
  return { ...state, ...action.payload };
};

export const updateSeries = (state, action) => {
  state.series = {
    ...state.series,
    ...action.payload.value
  };
};

export const deleteKey = (state, { payload }) => {
  if (Object.keys(state).includes(payload)) {
    delete state[payload];
  }
};

export const exerciseSlice = createSlice({
  name: 'exerciseSlice',
  initialState,
  reducers: {
    deleteKey,
    reset,
    updateProps,
    updateSeries
  }
});

export const exerciseSliceActions = exerciseSlice.actions;

export const exerciseSliceTypes = {
  deleteKey: exerciseSlice.actions.deleteKey.type,
  reset: exerciseSlice.actions.reset.type,
  updateProps: exerciseSlice.actions.updateProps.type,
  updateSeries: exerciseSlice.actions.updateSeries.type
};

export default exerciseSlice.reducer;
