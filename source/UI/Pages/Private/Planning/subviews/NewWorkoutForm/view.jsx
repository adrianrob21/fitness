import PropTypes from 'prop-types';

import I18n from 'Translations';
import { filterArrayValues, mock } from 'Helpers';
import { ChipsGroup, Dropdown } from 'Components';

import { DROPDOWN_OPTIONS } from './constants';

const NewWorkoutForm = ({ selectedCategories = [], updatePlanningProps = mock }) => {
  const chipsLabels = DROPDOWN_OPTIONS.filter(
    filterArrayValues.bind(null, selectedCategories)
  );

  return (
    <div className={'w-full space-y-4'}>
      <ChipsGroup
        labels={chipsLabels}
        updateProps={updatePlanningProps}
        selectedValues={selectedCategories}
        keyToUpdate={'selectedCategories'}
      />
      <Dropdown
        options={DROPDOWN_OPTIONS}
        updateProps={updatePlanningProps}
        alreadySelected={selectedCategories}
        buttonTitle={I18n.t('planning:newWorkoutForm.dropdownTitle')}
      />
    </div>
  );
};

NewWorkoutForm.propTypes = {
  selectedCategories: PropTypes.array,
  updatePlanningProps: PropTypes.func
};

export default NewWorkoutForm;
