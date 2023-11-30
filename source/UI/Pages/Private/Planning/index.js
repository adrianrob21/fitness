import { connect } from 'react-redux';

import { appSliceActions } from 'Reducers/appSlice';
import { planningSliceActions } from 'Reducers/planningSlice';

import Planning from './view';

export default connect(
  state => ({
    ...state.planningSlice
  }),
  {
    updatePlanningProps: planningSliceActions.updateProps,
    getDocuments: appSliceActions.getDocuments
  }
)(Planning);
