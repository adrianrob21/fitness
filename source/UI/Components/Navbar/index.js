import { connect } from 'react-redux';

import { userSliceActions } from 'Reducers/userSlice';

import Navbar from './view';

export default connect(() => ({}), {
  logout: userSliceActions.logout
})(Navbar);
