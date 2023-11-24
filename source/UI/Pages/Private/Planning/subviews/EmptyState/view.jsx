import I18n from 'Translations';
import { Icon, Button } from 'Components';

const EmptyState = () => (
  <>
    <Icon iconName={'NoPlans'} />
    <div className={'w-full md:w-4/12 space-y-4'}>
      <h1 className={'text-white text-2xl font-bold text-center'}>
        {I18n.t('planning:nothingPlanned')}
      </h1>
      <Button label={I18n.t('planning:addWorkout')} />
    </div>
  </>
);

export default EmptyState;
