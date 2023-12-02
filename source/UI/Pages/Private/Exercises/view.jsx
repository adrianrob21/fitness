import { useEffect } from 'react';
import PropTypes from 'prop-types';

import I18n from 'Translations';
import { mock, formatDate } from 'Helpers';
import { Calendar, Tabs, ChipsGroup } from 'Components';
import { Card, MainLayout, ContentContainer } from 'Containers';

import { EmptyState } from './subviews';
import { renderTrainingCard } from './pieces';

const createTabs = ({ length }) =>
  Array.from(Array(length)).map((_item, index) => ({
    value: index,
    label: I18n.t('trainings:trainingNumber', { count: index + 1 })
  }));

const onDateChange = ({ updateTrainingsProps }, date) => {
  updateTrainingsProps({ selectedDate: formatDate({ date }) });
};

const Exercises = ({
  getDayWorkouts = mock,
  selectedDate = '',
  selectedTab = 0,
  updateTrainingsProps = mock,
  workouts = []
}) => {
  useEffect(() => {
    if (selectedDate) {
      getDayWorkouts({ selectedDate });
    }
  }, [selectedDate, getDayWorkouts]);

  return (
    <MainLayout>
      <Card centerAll={!workouts.length}>
        <span className={'mb-10'}>
          <p className={'text-white text-3xl'}>Muscle groups: </p>
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
        <h1 className={'text-white'}>{selectedDate}</h1>
        {!workouts.length ? (
          <EmptyState />
        ) : (
          <div className={'flex space-x-10'}>
            {workouts[selectedTab].exercises?.map(renderTrainingCard)}
          </div>
        )}
      </Card>

      <ContentContainer>
        <Calendar onChange={onDateChange.bind(null, { updateTrainingsProps })} />
        <h1 className={'text-xl text-white'}>Today's inspiration</h1>
        <Card />
      </ContentContainer>
    </MainLayout>
  );
};

Exercises.propTypes = {
  getDayWorkouts: PropTypes.func,
  selectedDate: PropTypes.string,
  selectedTab: PropTypes.string,
  updateTrainingsProps: PropTypes.func,
  workouts: PropTypes.array
};

export default Exercises;
