import { connect } from 'react-redux';

import { userSliceActions } from 'Reducers/userSlice';

import Navbar from './view';

export default connect(
  state => ({
    processingProfilePicture: state.transientSlice?.processingProfilePicture,
    profilePicture: state.userSlice?.profilePicture,
    userId: state.userSlice?.userId,
    userSession: state.userSlice?.userSession
  }),
  {
    getProfilePicture: userSliceActions.getProfilePicture,
    logout: userSliceActions.logout
  }
)(Navbar);
