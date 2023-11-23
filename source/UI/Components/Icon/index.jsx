import PropTypes from 'prop-types';

import {
  Calendar,
  Check,
  Dumbell,
  Envelope,
  Exit,
  Eye,
  Home,
  IdCard,
  Media,
  Quotes,
  SlashedEye,
  UserIcon
} from 'Assets/svgs';

const Icons = {
  Calendar,
  Check,
  Dumbell,
  Envelope,
  Exit,
  Eye,
  Home,
  IdCard,
  Media,
  Quotes,
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
