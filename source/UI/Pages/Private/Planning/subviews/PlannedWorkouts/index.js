import { connect } from 'react-redux';

import { appSliceActions } from 'Reducers/appSlice';

import PlannedWorkouts from './view';

export default connect(
  state => ({
    plannedWorkouts: state.planningSlice?.plannedWorkouts
  }),
  {
    getDocuments: appSliceActions.getDocuments
  }
)(PlannedWorkouts);
