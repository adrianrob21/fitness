import { createSlice } from '@reduxjs/toolkit';

import { updateProps } from '../shared';

const initialState = {
  exercises: []
};

const reset = () => initialState;

export const deleteKey = (state, { payload }) => {
  if (Object.keys(state).includes(payload)) {
    delete state[payload];
  }
};

export const updateExercises = (state, { payload }) => {
  state.exercises.push(payload);
};

export const workoutSlice = createSlice({
  name: 'workoutSlice',
  initialState,
  reducers: {
    deleteKey,
    reset,
    updateExercises,
    updateProps
  }
});

export const workoutSliceActions = workoutSlice.actions;

export const workoutSliceTypes = {
  deleteKey: workoutSlice.actions.deleteKey.type,
  reset: workoutSlice.actions.reset.type,
  updateExercises: workoutSlice.actions.updateExercises.type,
  updateProps: workoutSlice.actions.updateProps.type
};

export default workoutSlice.reducer;
