import moment from 'moment';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import I18n from 'Translations';
import { filterArrayValues, formatDate, mock } from 'Helpers';
import { Calendar, ChipsGroup, Dropdown, StepCounter } from 'Components';

import { DROPDOWN_OPTIONS } from './constants';
import { disableDays, onDateChange } from './bindings';

const NewWorkoutForm = ({
  planningState = {},
  transient = {},
  updatePlanningProps = mock,
  updateSeries = mock,
  updateTransientProps = mock
}) => {
  const {
    selectedCategories = [],
    selectedDate = undefined,
    series = {}
  } = planningState;

  useEffect(() => {
    if (!selectedDate) {
      updatePlanningProps({ selectedDate: formatDate({ date: moment() }) });
    }
  }, []);

  const chipsLabels = DROPDOWN_OPTIONS.filter(
    filterArrayValues.bind(null, selectedCategories)
  );

  return (
    <div className={'w-full flex flex-wrap justify-between space-y-4'}>
      <Calendar
        disableDays={disableDays}
        onChange={onDateChange.bind(null, { updatePlanningProps })}
      />
      <div className={'flex flex-col space-y-12 h-full w-full md:w-1/2'}>
        <p className={'text-white text-2xl'}>
          {formatDate({ date: selectedDate, format: 'descriptive' })}
        </p>
        <StepCounter
          maxCount={5}
          onCheck={updateTransientProps}
          series={series}
          transient={transient}
          updateProps={updateSeries}
        />
        <ChipsGroup
          keyToUpdate={'selectedCategories'}
          labels={chipsLabels}
          selectedValues={selectedCategories}
          updateProps={updatePlanningProps}
        />
        <Dropdown
          alreadySelected={selectedCategories}
          buttonTitle={I18n.t('planning:newWorkoutForm.dropdownTitle')}
          options={DROPDOWN_OPTIONS}
          updateProps={updatePlanningProps}
        />
      </div>
    </div>
  );
};

NewWorkoutForm.propTypes = {
  planningState: PropTypes.object,
  selectedCategories: PropTypes.array,
  series: PropTypes.object,
  transient: PropTypes.object,
  updatePlanningProps: PropTypes.func,
  updateSeries: PropTypes.func,
  updateTransientProps: PropTypes.func
};

export default NewWorkoutForm;
