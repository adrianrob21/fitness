import { connect } from 'react-redux';

import { transientSliceActions } from 'Reducers/transientSlice';

import SignUp from './view';

export default connect(
  state => ({
    termsAccepted: state.transientSlice?.termsAccepted
  }),
  {
    resetTransient: transientSliceActions.reset,
    updateTransientProps: transientSliceActions.updateProps
  }
)(SignUp);
