import { connect } from 'react-redux';

import { planningSliceActions } from 'Reducers/planningSlice';

import Planning from './view';

export default connect(
  state => ({
    ...state.planningSlice
  }),
  {
    updatePlanningProps: planningSliceActions.updateProps
  }
)(Planning);
