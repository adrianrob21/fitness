import PropTypes from 'prop-types';

import I18n from 'Translations';
import { Tabs, Modal, Button } from 'Components';
import { Card, ContentContainer, MainLayout } from 'Containers';

import { DayWorkouts, PlannedWorkouts } from './subviews';

const tabs = [{ value: 'planned' }, { value: 'new' }];

const contentToRender = {
  planned: <PlannedWorkouts />,
  new: <DayWorkouts />
};

const Planning = ({
  plannedWorkouts = [],
  selectedTab = 'planned',
  planningModal = false,
  updatePlanningProps = mock
}) => {
  const noPlannedTrainings = !plannedWorkouts.length;

  return (
    <>
      <Modal
        setVisible={updatePlanningProps}
        modalName={'planningModal'}
        visible={planningModal}>
        <h1 className={'text-white'}>This is a text</h1>
      </Modal>
      <MainLayout>
        <ContentContainer width={'full'}>
          <div
            className={
              'flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between'
            }>
            <h3 className={'text-2xl text-white'}>{I18n.t('planning:title')}</h3>
            <Button
              label={'Open Modal'}
              onClick={updatePlanningProps.bind(null, { planningModal: true })}
            />
            <Tabs
              tabs={tabs}
              selectedTab={selectedTab}
              updateProps={updatePlanningProps}
            />
          </div>
          <Card centerAll={noPlannedTrainings && selectedTab !== 'new'}>
            {contentToRender[selectedTab]}
          </Card>
        </ContentContainer>
      </MainLayout>
    </>
  );
};

Planning.propTypes = {
  plannedWorkouts: PropTypes.array,
  planningModal: PropTypes.bool,
  selectedTab: PropTypes.string,
  updatePlanningProps: PropTypes.func
};

export default Planning;
