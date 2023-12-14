import { createSlice } from '@reduxjs/toolkit';

import { reduxMock, updateProps } from '../shared';

const initialState = {};

const reset = () => initialState;

const loginSuccess = (state, { payload }) => ({
  ...state,
  email: payload.user.email,
  userId: payload.user.uid,
  userSession: true
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getProfilePicture: reduxMock,
    login: reduxMock,
    loginSuccess,
    logout: reduxMock,
    register: reduxMock,
    registerSuccess: reduxMock,
    reset,
    updateProps,
    uploadProfilePicture: reduxMock,
    uploadProfilePictureSuccess: reduxMock
  }
});

export const userSliceActions = userSlice.actions;

export const userSliceTypes = {
  getProfilePicture: userSlice.actions.getProfilePicture.type,
  getProfilePictureSuccess: userSlice.actions.getProfilePicture.type,
  login: userSlice.actions.login.type,
  logout: userSlice.actions.logout.type,
  loginSuccess: userSlice.actions.loginSuccess.type,
  register: userSlice.actions.register.type,
  registerSuccess: userSlice.actions.registerSuccess.type,
  reset: userSlice.actions.reset.type,
  updateProps: userSlice.actions.updateProps.type,
  uploadProfilePicture: userSlice.actions.uploadProfilePicture.type
};

export const userSelector = state => state.userSlice;

export default userSlice.reducer;
