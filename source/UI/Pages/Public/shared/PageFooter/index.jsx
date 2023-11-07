import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import { TEXT_WHITE } from 'Constants';
import { mock } from 'Helpers';

import { onNavigate } from './functions';

const PageFooter = ({
  label = '',
  linkTitle = '',
  navigationPath = '',
  onLinkClick = mock
}) => {
  const navigate = useNavigate();

  return (
    <span className={'w-fit flex'}>
      <p className={TEXT_WHITE}>{label}</p>
      <div onClick={onNavigate.bind(null, { navigate, navigationPath, onLinkClick })}>
        <p className={`${TEXT_WHITE} pl-2 underline cursor-pointer`}>{linkTitle}</p>
      </div>
    </span>
  );
};

PageFooter.propTypes = {
  label: PropTypes.string,
  linkTitle: PropTypes.string,
  navigationPath: PropTypes.string,
  onLinkClick: PropTypes.func
};

export default PageFooter;
