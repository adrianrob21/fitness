import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import I18n from 'Translations';
import { Dropdown } from 'Components';

import { DROPDOWN_OPTIONS } from './constants';

const NewWorkoutForm = ({ updatePlanningProps = mock, selectedCategories = [] }) => (
  <Dropdown
    options={DROPDOWN_OPTIONS}
    updateProps={updatePlanningProps}
    alreadySelected={selectedCategories}
    buttonTitle={I18n.t('planning:newWorkoutForm.dropdownTitle')}
  />
);

NewWorkoutForm.propTypes = {
  selectedCategories: PropTypes.array,
  updatePlanningProps: PropTypes.func
};

export default NewWorkoutForm;
