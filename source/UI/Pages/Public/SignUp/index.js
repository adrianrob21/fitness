import { connect } from 'react-redux';

import { userSliceActions } from 'Reducers/userSlice';
import { transientSliceActions } from 'Reducers/transientSlice';

import SignUp from './view';

export default connect(
  state => ({
    ...state.transientSlice
  }),
  {
    register: userSliceActions.register,
    resetTransient: transientSliceActions.reset,
    updateTransientProps: transientSliceActions.updateProps
  }
)(SignUp);
