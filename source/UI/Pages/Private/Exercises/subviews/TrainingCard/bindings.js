import I18n from 'Translations';

import {
  renderAnotherInProgress,
  renderExercise,
  renderExercisePause,
  renderFinished,
  renderPast
} from './renderFunctions';

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

  updateExercise({ docId, body });
};

export const getButtonProps = (
  notInProgress,
  beforeFinish,
  args,
  updateTrainingsProps
) => {
  if (notInProgress)
    return {
      label: I18n.t('exercise:start'),
      onClick: updateTrainingsProps.bind(null, { inProgress: args.id })
    };
  if (beforeFinish)
    return {
      label: I18n.t('exercise:finish'),
      onClick: onFinish.bind(null, args)
    };
  return {
    label: I18n.t('exercise:next'),
    onClick: onNext.bind(null, args)
  };
};

export const generateView = (conditions, args) => {
  const { anotherInProgress, exercisePause, isFinished, isPast } = conditions;

  if (isPast) return renderPast();
  if (isFinished) return renderFinished();
  if (anotherInProgress) return renderAnotherInProgress();
  if (exercisePause) return renderExercisePause(args);
  return renderExercise(args);
};
