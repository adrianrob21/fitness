import { connect } from 'react-redux';

import { userSliceActions } from 'Reducers/userSlice';
import { transientSliceActions } from 'Reducers/transientSlice';

import Login from './view';

export default connect(
  state => ({
    ...state.transientSlice
  }),
  {
    resetTransient: transientSliceActions.reset,
    login: userSliceActions.login
  }
)(Login);
