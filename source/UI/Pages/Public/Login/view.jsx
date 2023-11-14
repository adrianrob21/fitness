import PropTypes from 'prop-types';

import I18n from 'Translations';
import { PATHS } from 'Constants';
import { Button } from 'Components';
import { inputsValidation, mock } from 'Helpers';

import { LOGIN_INPUTS } from './constants';
import { PageFooter, PageHeader, PageLayout } from '../shared';

const Login = ({ resetTransient = mock, email = {}, password = {} }) => {
  const allValid = [email, password].every(inputsValidation);

  return (
    <PageLayout
      PageHeader={<PageHeader title={I18n.t('login:title')} />}
      inputs={LOGIN_INPUTS}
      Button={<Button disabled={!allValid} label={I18n.t('login:title')} />}
      inputsValues={{ email, password }}
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
};

Login.propTypes = {
  resetTransient: PropTypes.func,
  email: PropTypes.object,
  password: PropTypes.object
};

export default Login;
