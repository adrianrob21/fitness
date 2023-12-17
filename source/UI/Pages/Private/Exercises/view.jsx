import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import I18n from 'Translations';
import { mock, formatDate } from 'Helpers';
import { Calendar, Tabs, ChipsGroup } from 'Components';
import { Card, MainLayout, ContentContainer } from 'Containers';

import { EmptyState } from './subviews';
import { renderTrainingCard } from './pieces';
import { createTabs, onDateChange } from './bindings';

const Exercises = ({
  getDayWorkouts = mock,
  processingExerciseUpdate = false,
  trainingsState = {},
  updateExercise = mock,
  updateTrainingsProps = mock
}) => {
  const {
    selectedTab = 0,
    workouts = [],
    selectedDate = formatDate({ date: new Date() })
  } = trainingsState;

  useEffect(() => {
    getDayWorkouts({ selectedDate });
  }, [getDayWorkouts, selectedDate]);

  return (
    <MainLayout>
      <div className={'w-full'}>
        <Card centerAll={!workouts.length}>
          <span className={'mb-10'}>
            <p className={'text-white text-3xl'}>{`${I18n.t(
              'exercise:muscleGroups'
            )}:`}</p>

            <ChipsGroup
              hasDelete={false}
              labels={workouts[selectedTab]?.muscles?.map(muscle => ({
                label: muscle.toUpperCase()
              }))}
            />
          </span>
          {workouts.length > 1 && (
            <Tabs
              tabs={createTabs({ length: workouts?.length })}
              selectedTab={selectedTab}
              updateProps={updateTrainingsProps}
            />
          )}
          {processingExerciseUpdate ? (
            <div className={'flex h-full w-full justify-center items-center'}>
              <FontAwesomeIcon
                icon={faDumbbell}
                spin
                style={{ color: '#ffffff', width: '10rem', height: '10rem' }}
              />
            </div>
          ) : !workouts.length ? (
            <EmptyState />
          ) : (
            <div
              className={'flex md:space-x-10 justify-center md:justify-start flex-wrap'}>
              {workouts[selectedTab]?.exercises?.map(
                renderTrainingCard.bind(null, {
                  docId: workouts[selectedTab]?.id,
                  exercises: workouts[selectedTab]?.exercises,
                  processingExerciseUpdate,
                  trainingsState,
                  updateExercise,
                  updateTrainingsProps,
                  workout: workouts[selectedTab]
                })
              )}
            </div>
          )}
        </Card>
      </div>
      <ContentContainer>
        <Calendar
          onChange={onDateChange.bind(null, { updateTrainingsProps })}
          defaultValue={new Date(selectedDate)}
        />
        <h1 className={'text-xl text-white'}>Today's inspiration</h1>
        <Card />
      </ContentContainer>
    </MainLayout>
  );
};

Exercises.propTypes = {
  getDayWorkouts: PropTypes.func,
  processingExerciseUpdate: PropTypes.bool,
  trainingsState: PropTypes.object,
  updateExercise: PropTypes.func,
  updateTrainingsProps: PropTypes.func
};

export default Exercises;
