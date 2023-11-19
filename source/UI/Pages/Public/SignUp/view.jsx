import PropTypes from 'prop-types';

import I18n from 'Translations';
import { PATHS } from 'Constants';
import { Button, Checkbox } from 'Components';
import { inputsValidation, mock } from 'Helpers';

import { SIGNUP_INPUTS } from './constants';
import { PageFooter, PageHeader, PageLayout } from '../shared';

const SignUp = ({
  confirmPassword = {},
  createPassword = {},
  email = {},
  fullname = {},
  processing = false,
  register = mock,
  resetTransient = mock,
  termsAccepted = false,
  updateTransientProps = mock,
  username = {}
}) => {
  const allValid =
    [fullname, email, username, confirmPassword, createPassword].every(
      inputsValidation
    ) &&
    confirmPassword.value.length &&
    confirmPassword.value === createPassword.value;

  return (
    <PageLayout
      PageHeader={
        <PageHeader
          title={I18n.t('signUp:title')}
          subtitle={I18n.t('signUp:getStarted')}
        />
      }
      inputsValues={{ confirmPassword, createPassword, email, fullname, username }}
      inputs={SIGNUP_INPUTS}
      ExtraContent={
        <Checkbox
          active={termsAccepted}
          label={I18n.t('signUp:terms')}
          onCheck={updateTransientProps.bind(null, {
            termsAccepted: !termsAccepted
          })}
        />
      }
      Button={
        <Button
          disabled={!allValid}
          processing={processing}
          onClick={register.bind(null, {
            email: email.value,
            password: createPassword?.value
          })}
          label={I18n.t('signUp:title')}
        />
      }
      PageFooter={
        <PageFooter
          label={I18n.t('signUp:hasAccount')}
          linkTitle={I18n.t('login:title')}
          onLinkClick={resetTransient}
          navigationPath={PATHS.LOGIN}
        />
      }
    />
  );
};

SignUp.propTypes = {
  confirmPassword: PropTypes.object,
  createPassword: PropTypes.object,
  email: PropTypes.object,
  fullname: PropTypes.object,
  mock: PropTypes.func,
  processing: PropTypes.bool,
  register: PropTypes.func,
  resetTransient: PropTypes.func,
  termsAccepted: PropTypes.bool,
  updatePropsWithValidation: PropTypes.func,
  updateTransientProps: PropTypes.func,
  username: PropTypes.object
};

export default SignUp;
