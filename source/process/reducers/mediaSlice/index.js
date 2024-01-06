import { createSlice } from '@reduxjs/toolkit';

import { deleteKey, reduxMock, updateProps } from '../shared';

const initialState = {
  selectedImage: ''
};

const reset = () => initialState;

export const mediaSlice = createSlice({
  name: 'mediaSlice',
  initialState,
  reducers: {
    deleteKey,
    getMediaURL: reduxMock,
    getMediaURLSuccess: reduxMock,
    reset,
    updateProps,
    uploadFile: reduxMock,
    uploadFileSuccess: reduxMock
  }
});

export const mediaSliceActions = mediaSlice.actions;

export const mediaSliceTypes = {
  deleteKey: mediaSlice?.actions.deleteKey.type,
  getMediaURL: mediaSlice?.actions.getMediaURL.type,
  getMediaURLSuccess: mediaSlice?.actions.getMediaURLSuccess.type,
  reset: mediaSlice?.actions.reset.type,
  updateProps: mediaSlice?.actions.updateProps.type,
  uploadFile: mediaSlice?.actions.uploadFile.type,
  uploadFileSuccess: mediaSlice?.actions.uploadFile.type
};

export default mediaSlice.reducer;
