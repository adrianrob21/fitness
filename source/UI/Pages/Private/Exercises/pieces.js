import { TrainingCard } from './subviews';

export const renderTrainingCard = (
  { trainingsState, workout, updateTrainingsProps, exercises, updateExercise, docId },
  exercise
) => (
  <TrainingCard
    key={exercise?.id}
    {...{
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
