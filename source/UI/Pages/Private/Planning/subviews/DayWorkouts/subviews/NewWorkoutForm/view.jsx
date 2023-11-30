import moment from 'moment';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import I18n from 'Translations';
import { filterArrayValues, formatDate, mock } from 'Helpers';
import { ChipsGroup, Dropdown, StepCounter, Button, Input } from 'Components';

import { DROPDOWN_OPTIONS } from './constants';
import { renderExercisesList } from './pieces';
import { onChange, onCancel, onCreateWorkout, onAddExercise } from './bindings';

const NewWorkoutForm = ({
  createDocument = mock,
  deleteKey = mock,
  exerciseState = {},
  planningState = {},
  resetExercise = mock,
  resetTransient = mock,
  resetWorkout = mock,
  transient = {},
  updateExerciseProps = mock,
  updatePlanningProps = mock,
  updateSeries = mock,
  updateTransientProps = mock,
  updateWorkoutProps = mock,
  userId = '',
  workoutState = {}
}) => {
  const { selectedDate = undefined } = planningState;

  const {
    exerciseName = '',
    numberOfSets = 0,
    selectedCategories = [],
    series = {}
  } = exerciseState;

  const { exercises = [], date = '' } = workoutState;

  useEffect(() => {
    if (!date) {
      updateWorkoutProps({ date: formatDate({ date: moment() }) });
    }
  }, []);

  const chipsLabels = DROPDOWN_OPTIONS.filter(
    filterArrayValues.bind(null, selectedCategories)
  );

  const sets = Object.keys(series).filter(item => !item?.includes('pause'));

  const validateSets =
    sets.every(item => parseInt(series[item]) > 0) &&
    sets?.length === parseInt(numberOfSets);

  const buttonDisabled =
    !exerciseName || !numberOfSets || !selectedCategories.length || !validateSets;

  const addWorkoutDisabled = !exercises.length;

  return (
    <div className={'w-full md:flex justify-between'}>
      {renderExercisesList({
        addWorkoutDisabled,
        createDocument,
        exercises,
        onCreateWorkout,
        resetExercise,
        resetExercise,
        resetTransient,
        resetWorkout,
        updatePlanningProps,
        userId,
        workoutState
      })}
      <div className={'flex flex-col space-y-12 h-full md:w-1/2 justify-center'}>
        <div className={'md:flex md:justify-between flex-wrap space-y-6'}>
          <p className={'text-white text-center md:text-start text-2xl'}>
            {formatDate({ date: selectedDate, format: 'descriptive' })}
          </p>
          <Button
            label={'Cancel'}
            fullWidth={false}
            onClick={onCancel.bind(null, {
              deleteKey,
              selectedDate,
              updatePlanningProps,
              resetTransient,
              resetExercise
            })}
          />
        </div>
        <Input
          label={'Exercise Name'}
          placeholder={'Pushups'}
          backgroundColor={'black'}
          value={exerciseName}
          customOnChange={onChange.bind(null, {
            updateExerciseProps,
            key: 'exerciseName'
          })}
        />
        <Dropdown
          alreadySelected={selectedCategories}
          buttonTitle={I18n.t('planning:newWorkoutForm.dropdownTitle')}
          options={DROPDOWN_OPTIONS}
          updateProps={updateExerciseProps}
        />
        <ChipsGroup
          keyToUpdate={'selectedCategories'}
          labels={chipsLabels}
          selectedValues={selectedCategories}
          updateProps={updateExerciseProps}
        />
        <Input
          label={'Number of Sets'}
          placeholder={'10'}
          backgroundColor={'black'}
          type={'number'}
          value={numberOfSets}
          customOnChange={onChange.bind(null, {
            updateExerciseProps,
            key: 'numberOfSets'
          })}
        />
        {numberOfSets > 0 && (
          <StepCounter
            maxCount={parseInt(numberOfSets)}
            onCheck={updateTransientProps}
            series={series}
            transient={transient}
            updateProps={updateSeries}
          />
        )}
        <Button
          label={'Add exercise'}
          fullWidth={false}
          disabled={buttonDisabled}
          onClick={onAddExercise.bind(null, {
            exercises,
            exerciseState,
            resetExercise,
            resetTransient,
            selectedDate,
            updateWorkoutProps
          })}
        />
      </div>
    </div>
  );
};

NewWorkoutForm.propTypes = {
  createDocument: PropTypes.func,
  deleteKey: PropTypes.func,
  exerciseState: PropTypes.object,
  planningState: PropTypes.object,
  resetExercise: PropTypes.func,
  resetTransient: PropTypes.func,
  resetWorkout: PropTypes.func,
  selectedCategories: PropTypes.array,
  series: PropTypes.object,
  transient: PropTypes.object,
  updateExerciseProps: PropTypes.func,
  updatePlanningProps: PropTypes.func,
  updateSeries: PropTypes.func,
  updateTransientProps: PropTypes.func,
  updateWorkoutProps: PropTypes.func,
  userId: PropTypes.string,
  workoutState: PropTypes.object
};

export default NewWorkoutForm;
