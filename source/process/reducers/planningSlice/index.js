import { createSlice } from '@reduxjs/toolkit';

import { deleteKey, updateProps } from '../shared';

const initialState = {
  series: {}
};

const reset = () => initialState;

export const planningSlice = createSlice({
  name: 'planningSlice',
  initialState,
  reducers: {
    deleteKey,
    reset,
    updateProps
  }
});

export const planningSliceActions = planningSlice.actions;

export const planningSliceTypes = {
  deleteKey: planningSlice.actions.deleteKey.type,
  reset: planningSlice.actions.reset.type,
  updateProps: planningSlice.actions.updateProps.type
};

export default planningSlice.reducer;
