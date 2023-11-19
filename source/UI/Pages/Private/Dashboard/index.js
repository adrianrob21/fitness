import { connect } from 'react-redux';

import { userSliceActions } from 'Reducers/userSlice';

import Dashboard from './view';

export default connect(
  state => ({
    ...state.transientSlice
  }),
  {
    logout: userSliceActions.logout
  }
)(Dashboard);
