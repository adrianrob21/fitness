import { createSlice } from '@reduxjs/toolkit';

import { mock } from 'Helpers';

import { updateProps, deleteKey } from '../shared';

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
    getDayWorkouts: mock,
    getDayWorkoutsFail: mock,
    getDayWorkoutsSuccess: mock,
    reset,
    updateExercise: mock,
    updateExerciseFail: mock,
    updateExerciseSuccess: mock,
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
  updateExercise: trainingsSlice.actions.updateExercise.type,
  updateExerciseFail: trainingsSlice.actions.updateExerciseFail.type,
  updateExerciseSuccess: trainingsSlice.actions.updateExerciseSuccess.type,
  updateProps: trainingsSlice.actions.updateProps.type
};

export default trainingsSlice.reducer;
