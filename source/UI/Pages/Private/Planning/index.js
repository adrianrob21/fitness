import { connect } from 'react-redux';

import { appSliceActions } from 'Reducers/appSlice';
import { planningSliceActions } from 'Reducers/planningSlice';

import Planning from './view';

export default connect(
  state => ({
    ...state.planningSlice
  }),
  {
    getDocuments: appSliceActions.getDocuments,
    updatePlanningProps: planningSliceActions.updateProps
  }
)(Planning);
