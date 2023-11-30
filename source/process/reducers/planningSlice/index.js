import { createSlice } from '@reduxjs/toolkit';

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
