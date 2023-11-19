import { connect } from 'react-redux';

import Navigator from './view';

export default connect(
  state => ({
    userSession: state.userSlice?.userSession
  }),
  {}
)(Navigator);
