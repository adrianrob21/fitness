import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import I18n from 'Translations';
import { PATHS } from 'Constants';
import { Button } from 'Components';

import { LOGIN_INPUTS } from './constants';
import { PageLayout, PageHeader, PageFooter } from '../shared';

const Login = ({ resetTransient = mock }) => (
  <PageLayout
    PageHeader={<PageHeader title={I18n.t('login:title')} />}
    inputs={LOGIN_INPUTS}
    Button={<Button disabled={true} label={I18n.t('login:title')} />}
    PageFooter={
      <PageFooter
        label={I18n.t('login:dontHaveAccount')}
        linkTitle={I18n.t('signUp:title')}
        onLinkClick={resetTransient}
        navigationPath={PATHS.SIGN_UP}
      />
    }
  />
);

Login.propTypes = {
  resetTransient: PropTypes.func
};

export default Login;
