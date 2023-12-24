import { connect } from 'react-redux';

import { appSliceActions } from 'Reducers/appSlice';
import { planningSliceActions } from 'Reducers/planningSlice';

import PlannedWorkouts from './view';

export default connect(
  state => ({
    plannedWorkouts: state.planningSlice?.plannedWorkouts,
    processingPlannedWorkouts: state.transientSlice?.processingPlannedWorkouts
  }),
  {
    getDocuments: appSliceActions.getDocuments,
    updatePlanningProps: planningSliceActions.updateProps
  }
)(PlannedWorkouts);
