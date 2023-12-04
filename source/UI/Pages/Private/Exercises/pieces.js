import { TrainingCard } from './subviews';

export const renderTrainingCard = (
  {
    deleteTrainingsKey,
    trainingsState,
    workout,
    updateTrainingsProps,
    exercises,
    updateExercise,
    docId
  },
  exercise
) => (
  <TrainingCard
    key={exercise?.id}
    {...{
      deleteTrainingsKey,
      docId,
      exercise,
      workout,
      exercises,
      trainingsState,
      updateExercise,
      updateTrainingsProps
    }}
  />
);
