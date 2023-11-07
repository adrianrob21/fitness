import PropTypes from 'prop-types';

import { mock } from 'Helpers';
import I18n from 'Translations';
import { PATHS } from 'Constants';
import { Button, Checkbox } from 'Components';

import { SIGNUP_INPUTS } from './constants';
import { PageFooter, PageHeader, PageLayout } from '../shared';

const SignUp = ({
  termsAccepted = false,
  updateTransientProps = mock,
  resetTransient = mock
}) => (
  <PageLayout
    PageHeader={
      <PageHeader title={I18n.t('signUp:title')} subtitle={I18n.t('signUp:getStarted')} />
    }
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
    Button={<Button disabled={true} label={I18n.t('signUp:title')} />}
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

SignUp.propTypes = {
  resetTransient: PropTypes.func,
  termsAccepted: PropTypes.bool,
  updateTransientProps: PropTypes.func
};

export default SignUp;
