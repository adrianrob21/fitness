export const filterOutId = ({ id }, item) => item.id !== id;

export const onNext = ({
  exercise,
  exerciseCount,
  exercisePause,
  updateTrainingsProps,
  startTimer
}) => {
  if (exercisePause || !exercise?.series[`pause${exerciseCount}`]) {
    updateTrainingsProps({
      exerciseCount: exerciseCount + 1,
      exercisePause: false
    });
    startTimer(exercise?.series[`pause${exerciseCount}`]);
  } else if (exercise?.series[`pause${exerciseCount}`]) {
    updateTrainingsProps({ exercisePause: true });
    startTimer(exercise?.series[`pause${exerciseCount}`]);
  }
};

export const onFinish = ({
  deleteTrainingsKey,
  updateExercise,
  docId,
  workout,
  filterOutExercise,
  exercise
}) => {
  const body = {
    ...workout,
    exercises: [...filterOutExercise, { ...exercise, finished: true }]
  };

  deleteTrainingsKey('inProgress');
  deleteTrainingsKey('exerciseCount');
  updateExercise({ docId, body });
};
