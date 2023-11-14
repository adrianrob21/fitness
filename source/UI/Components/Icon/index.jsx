import PropTypes from 'prop-types';

import { Check, Envelope, Eye, IdCard, SlashedEye, UserIcon } from 'Assets/svgs';

const Icons = {
  Check,
  Envelope,
  Eye,
  IdCard,
  SlashedEye,
  UserIcon
};

const Icon = ({ color = 'fill-white', iconName = '' }) => {
  const CustomIcon = !iconName ? <></> : Icons[iconName];

  return <CustomIcon className={color} />;
};

Icon.propTypes = {
  color: PropTypes.string,
  iconName: PropTypes.string
};

export default Icon;
