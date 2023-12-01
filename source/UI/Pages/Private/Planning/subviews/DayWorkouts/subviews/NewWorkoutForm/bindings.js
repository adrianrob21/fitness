export const onChange = ({ updateExerciseProps, key }, value) => {
  updateExerciseProps({ [key]: value });
};

export const onCancel = ({
  deleteKey,
  resetExercise,
  resetTransient,
  selectedDate,
  updatePlanningProps
}) => {
  resetTransient();
  resetExercise();
  deleteKey(selectedDate);
  updatePlanningProps({ showForm: false });
};

export const onAddExercise = ({
  exercises,
  exerciseState,
  resetExercise,
  resetTransient,
  selectedDate,
  updateWorkoutProps
}) => {
  updateWorkoutProps({ date: selectedDate, exercises: [...exercises, exerciseState] });
  resetTransient();
  resetExercise();
};

export const onCreateWorkout = ({
  createDocument,
  resetExercise,
  resetTransient,
  resetWorkout,
  muscles,
  updatePlanningProps,
  userId,
  workoutState
}) => {
  createDocument({ collection: 'workouts', data: { userId, ...workoutState, muscles } });
  updatePlanningProps({ showForm: false });
  resetExercise();
  resetWorkout();
  resetTransient();
};
