import PropTypes from 'prop-types';

import I18n from 'Translations';
import { PATHS } from 'Constants';
import { Button } from 'Components';
import { inputsValidation, mock } from 'Helpers';

import { LOGIN_INPUTS } from './constants';
import { PageFooter, PageHeader, PageLayout } from '../shared';

const Login = ({
  email = {},
  login = mock,
  password = {},
  processing = false,
  resetTransient = mock
}) => {
  const allValid = [email, password].every(inputsValidation);

  return (
    <PageLayout
      PageHeader={<PageHeader title={I18n.t('login:title')} />}
      inputs={LOGIN_INPUTS}
      Button={
        <Button
          disabled={!allValid}
          label={I18n.t('login:title')}
          processing={processing}
          onClick={login.bind(null, { email: email.value, password: password.value })}
        />
      }
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
  email: PropTypes.object,
  login: PropTypes.func,
  password: PropTypes.object,
  processing: PropTypes.bool,
  resetTransient: PropTypes.func
};

export default Login;
