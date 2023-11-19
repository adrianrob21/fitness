import { createSlice } from '@reduxjs/toolkit';

import { mock } from 'Helpers';

const initialState = {};

const updateProps = (state, action) => {
  return { ...state, ...action.payload };
};

const reset = () => initialState;

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    createDocument: mock,
    createDocumentFail: mock,
    createDocumentSuccess: mock,
    reset,
    updateProps
  }
});

export const appSliceActions = appSlice.actions;

export const appSliceTypes = {
  createDocument: appSlice.actions.createDocument.type,
  createDocumentFail: appSlice.actions.createDocumentFail.type,
  createDocumentSuccess: appSlice.actions.createDocumentSuccess.type,
  reset: appSlice.actions.reset.type,
  updateProps: appSlice.actions.updateProps.type
};

export const appSelector = state => state.appSlice;

export default appSlice.reducer;
