import { TrainingCard } from './subviews';

export const renderTrainingCard = (
  { docId, exercises, trainingsState, updateExercise, updateTrainingsProps, workout },
  exercise
) => (
  <TrainingCard
    key={exercise?.id}
    {...{
      docId,
      exercise,
      exercises,
      trainingsState,
      updateExercise,
      updateTrainingsProps,
      workout
    }}
  />
);
