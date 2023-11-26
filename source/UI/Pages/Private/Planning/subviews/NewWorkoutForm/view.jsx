import PropTypes from 'prop-types';

import I18n from 'Translations';
import { filterArrayValues, mock } from 'Helpers';
import { ChipsGroup, Dropdown, StepCounter } from 'Components';

import { DROPDOWN_OPTIONS } from './constants';

const NewWorkoutForm = ({
  selectedCategories = [],
  series = {},
  transient = {},
  updatePlanningProps = mock,
  updateSeries = mock,
  updateTransientProps = mock
}) => {
  const chipsLabels = DROPDOWN_OPTIONS.filter(
    filterArrayValues.bind(null, selectedCategories)
  );

  return (
    <div className={'w-full space-y-4'}>
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
  );
};

NewWorkoutForm.propTypes = {
  selectedCategories: PropTypes.array,
  series: PropTypes.object,
  transient: PropTypes.object,
  updatePlanningProps: PropTypes.func,
  updateSeries: PropTypes.func,
  updateTransientProps: PropTypes.func
};

export default NewWorkoutForm;
