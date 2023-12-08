import { connect } from 'react-redux';

import { growlSliceActions } from 'Reducers/growlSlice';

import Growl from './view';

export default connect(
  state => ({
    ...state.growlSlice
  }),
  {
    updateGrowlProps: growlSliceActions.updateProps
  }
)(Growl);
