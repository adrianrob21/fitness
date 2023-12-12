import { connect } from 'react-redux';

import { transientSliceActions } from 'Reducers/transientSlice';

import PageLayout from './view';

export default connect(
  state => ({
    profileImage: state.transientSlice.profileImage
  }),
  {
    updatePropsWithValidation: transientSliceActions.updatePropsWithValidation,
    updateTransientProps: transientSliceActions.updateProps
  }
)(PageLayout);
