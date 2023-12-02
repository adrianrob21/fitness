import { createSlice } from '@reduxjs/toolkit';

import { mock } from 'Helpers';

const initialState = {
  series: {}
};

const reset = () => initialState;

const updateProps = (state, action) => {
  return { ...state, ...action.payload };
};

export const deleteKey = (state, { payload }) => {
  if (Object.keys(state).includes(payload)) {
    delete state[payload];
  }
};

export const trainingsSlice = createSlice({
  name: 'trainingsSlice',
  initialState,
  reducers: {
    deleteKey,
    getDayWorkouts: mock,
    getDayWorkoutsFail: mock,
    getDayWorkoutsSuccess: mock,
    reset,
    updateProps
  }
});

export const trainingsSliceActions = trainingsSlice.actions;

export const trainingsSliceTypes = {
  deleteKey: trainingsSlice.actions.deleteKey.type,
  getDayWorkouts: trainingsSlice.actions.getDayWorkouts.type,
  getDayWorkoutsFail: trainingsSlice.actions.getDayWorkoutsFail.type,
  getDayWorkoutsSuccess: trainingsSlice.actions.getDayWorkoutsSuccess.type,
  reset: trainingsSlice.actions.reset.type,
  updateProps: trainingsSlice.actions.updateProps.type
};

export default trainingsSlice.reducer;
