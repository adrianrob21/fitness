export const onChange = ({ updateExerciseProps, key }, value) => {
  updateExerciseProps({ [key]: value });
};

export const onCancel = ({
  deleteKey,
  selectedDate,
  updatePlanningProps,
  resetExercise,
  resetTransient
}) => {
  resetTransient();
  resetExercise();
  deleteKey(selectedDate);
  updatePlanningProps({ showForm: false });
};

export const onAddExercise = ({
  updateWorkoutProps,
  resetExercise,
  selectedDate,
  exercises,
  resetTransient,
  exerciseState
}) => {
  updateWorkoutProps({ date: selectedDate, exercises: [...exercises, exerciseState] });
  resetTransient();
  resetExercise();
};

export const onCreateWorkout = ({
  updatePlanningProps,
  resetExercise,
  resetWorkout,
  resetTransient,
  createDocument,
  workoutState,
  userId
}) => {
  createDocument({ collection: 'workouts', data: { userId, ...workoutState } });
  updatePlanningProps({ showForm: false });
  resetExercise();
  resetWorkout();
  resetTransient();
};
