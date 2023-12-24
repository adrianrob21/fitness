import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import I18n from 'Translations';
import { Icon, Button } from 'Components';

const EmptyState = ({ updateProps = mock }) => (
  <>
    <Icon iconName={'NoPlans'} />
    <div className={'w-full md:w-4/12 space-y-4'}>
      <h1 className={'text-white text-2xl font-bold text-center'}>
        {I18n.t('planning:nothingPlanned')}
      </h1>
      <Button
        label={I18n.t('planning:addWorkout')}
        onClick={updateProps.bind(null, { selectedTab: 'new' })}
      />
    </div>
  </>
);

EmptyState.propTypes = {
  updateProps: PropTypes.func
};

export default EmptyState;
