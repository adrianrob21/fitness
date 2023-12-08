import { createSlice } from '@reduxjs/toolkit';

import { deleteKey, updateProps } from '../shared';

const initialState = {
  growlActive: false,
  message: '',
  growlType: 'error'
};

const reset = () => initialState;

export const callGrowl = (state, { payload }) => {
  state.message = payload.message;
  state.growlType = payload.type;
  state.growlActive = true;
};

export const growlSlice = createSlice({
  name: 'growlSlice',
  initialState,
  reducers: {
    callGrowl,
    deleteKey,
    reset,
    updateProps
  }
});

export const growlSliceActions = growlSlice.actions;

export const growlSliceTypes = {
  callGrowl: growlSlice.actions.callGrowl.type,
  deleteKey: growlSlice.actions.deleteKey.type,
  reset: growlSlice.actions.reset.type,
  updateProps: growlSlice.actions.updateProps.type
};

export default growlSlice.reducer;
