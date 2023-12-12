import { connect } from 'react-redux';

import { userSliceActions } from 'Reducers/userSlice';

import Navbar from './view';

export default connect(
  state => ({
    profilePicture: state.userSlice?.profilePicture,
    userId: state.userSlice?.userId,
    userSession: state.userSlice?.userSession
  }),
  {
    logout: userSliceActions.logout,
    getProfilePicture: userSliceActions.getProfilePicture
  }
)(Navbar);
