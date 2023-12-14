import { createSlice } from '@reduxjs/toolkit';

import { updateProps, deleteKey, reduxMock } from '../shared';

const initialState = {
  series: {},
  selectedTab: 0
};

const reset = () => initialState;

export const trainingsSlice = createSlice({
  name: 'trainingsSlice',
  initialState,
  reducers: {
    deleteKey,
    getDayWorkouts: reduxMock,
    reset,
    updateExercise: reduxMock,
    updateProps
  }
});

export const trainingsSliceActions = trainingsSlice.actions;

export const trainingsSliceTypes = {
  deleteKey: trainingsSlice.actions.deleteKey.type,
  getDayWorkouts: trainingsSlice.actions.getDayWorkouts.type,
  reset: trainingsSlice.actions.reset.type,
  updateExercise: trainingsSlice.actions.updateExercise.type,
  updateProps: trainingsSlice.actions.updateProps.type
};

export default trainingsSlice.reducer;
