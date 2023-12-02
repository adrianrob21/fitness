import I18n from 'Translations';
import { Icon } from 'Components';

const EmptyState = () => (
  <div className={'flex flex-col justify-center items-center'}>
    <Icon iconName={'Bed'} />
    <div className={'w-full md:w-6/12 space-y-4'}>
      <h1 className={'text-white text-2xl font-bold text-center'}>
        {I18n.t('trainings:restDay')}
      </h1>
    </div>
  </div>
);

export default EmptyState;
