import { connect } from 'react-redux';

import { transientSliceActions } from 'Reducers/transientSlice';

import SignUp from './view';

export default connect(
  state => ({
    ...state.transientSlice
  }),
  {
    resetTransient: transientSliceActions.reset,
    updateTransientProps: transientSliceActions.updateProps
  }
)(SignUp);
