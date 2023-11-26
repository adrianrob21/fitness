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
    [action.payload.date]: {
      ...state.series[action.payload.date],
      ...action.payload.value
    }
  };
};

export const planningSlice = createSlice({
  name: 'planningSlice',
  initialState,
  reducers: {
    reset,
    updateProps,
    updateSeries
  }
});

export const planningSliceActions = planningSlice.actions;

export const planningSliceTypes = {
  reset: planningSlice.actions.reset.type,
  updateProps: planningSlice.actions.updateProps.type,
  updateSeries: planningSlice.actions.updateSeries
};

export default planningSlice.reducer;
