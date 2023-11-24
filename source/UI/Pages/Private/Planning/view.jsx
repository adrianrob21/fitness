import PropTypes from 'prop-types';

import I18n from 'Translations';
import { Tabs } from 'Components';
import { Card, ContentContainer, MainLayout } from 'Containers';

import { EmptyState, NewWorkoutForm } from './subviews';

const tabs = [{ value: 'planned' }, { value: 'new' }];

const contentToRender = {
  planned: <EmptyState />,
  new: <NewWorkoutForm />
};

const Planning = ({
  plannedTrainings = [],
  selectedTab = 'planned',
  updatePlanningProps = mock
}) => {
  const noPlannedTrainings = !plannedTrainings.length;

  return (
    <MainLayout>
      <ContentContainer width={'full'}>
        <div
          className={'flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between'}>
          <h3 className={'text-2xl text-white'}>{I18n.t('planning:title')}</h3>
          <Tabs tabs={tabs} selectedTab={selectedTab} updateProps={updatePlanningProps} />
        </div>
        <Card centerAll={noPlannedTrainings}>{contentToRender[selectedTab]}</Card>
      </ContentContainer>
      <ContentContainer>
        <h3 className={'text-xl w-72 text-white'}>Today's inspiration</h3>
        <Card></Card>
      </ContentContainer>
    </MainLayout>
  );
};

Planning.propTypes = {
  plannedTrainings: PropTypes.array,
  selectedTab: PropTypes.string,
  updatePlanningProps: PropTypes.func
};

export default Planning;
