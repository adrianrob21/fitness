import { connect } from 'react-redux';

import { transientSliceActions } from 'Reducers/transientSlice';

import Login from './view';

export default connect(() => ({}), {
  resetTransient: transientSliceActions.reset
})(Login);
