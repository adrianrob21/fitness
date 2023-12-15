import { createSlice } from '@reduxjs/toolkit';

import { reduxMock, updateProps } from '../shared';

const initialState = {};

const reset = () => initialState;

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    createDocument: reduxMock,
    getDocuments: reduxMock,
    getDocumentsSuccess: reduxMock,
    requestFail: reduxMock,
    requestSuccess: reduxMock,
    reset,
    updateProps
  }
});

export const appSliceActions = appSlice.actions;

export const appSliceTypes = {
  createDocument: appSlice.actions.createDocument.type,
  getDocuments: appSlice.actions.getDocuments.type,
  getDocumentsSuccess: appSlice.actions.getDocumentsSuccess.type,
  requestFail: appSlice.actions.requestFail.type,
  requestSuccess: appSlice.actions.requestSuccess.type,
  reset: appSlice.actions.reset.type,
  updateProps: appSlice.actions.updateProps.type
};

export const appSelector = state => state.appSlice;

export default appSlice.reducer;
