import { connect } from 'react-redux';

import { transientSliceActions } from 'Reducers/transientSlice';

import PageLayout from './view';

export default connect(() => ({}), {
  updatePropsWithValidation: transientSliceActions.updatePropsWithValidation
})(PageLayout);
