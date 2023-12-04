import { createSlice } from '@reduxjs/toolkit';

import { mock } from 'Helpers';

import { updateProps } from '../shared';

const initialState = {};

const reset = () => initialState;

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: mock,
    loginFail: mock,
    loginSuccess: mock,
    logout: mock,
    logoutFail: mock,
    register: mock,
    registerFail: mock,
    registerSuccess: mock,
    reset,
    updateProps
  }
});

export const userSliceActions = userSlice.actions;

export const userSliceTypes = {
  login: userSlice.actions.login.type,
  loginFail: userSlice.actions.loginFail.type,
  loginSuccess: userSlice.actions.loginSuccess.type,
  logout: userSlice.actions.logout.type,
  logoutFail: userSlice.actions.loginFail.type,
  register: userSlice.actions.register.type,
  registerFail: userSlice.actions.registerFail.type,
  registerSuccess: userSlice.actions.registerSuccess.type,
  reset: userSlice.actions.reset.type,
  updateProps: userSlice.actions.updateProps.type
};

export const userSelector = state => state.userSlice;

export default userSlice.reducer;
