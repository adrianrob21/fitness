import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import I18n from 'Translations';
import { Button } from 'Components';

const Dashboard = ({ logout = mock, processing = false }) => {
  return (
    <div className={'w-1/2 pt-20'}>
      <Button
        disabled={false}
        label={I18n.t('general:logout')}
        onClick={logout}
        processing={processing}
      />
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func,
  processing: PropTypes.bool
};

export default Dashboard;
