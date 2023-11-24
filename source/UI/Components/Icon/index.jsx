import PropTypes from 'prop-types';

import {
  Calendar,
  Check,
  Chevron,
  Dumbell,
  Envelope,
  Exit,
  Eye,
  Home,
  IdCard,
  Media,
  NoPlans,
  Quotes,
  SlashedEye,
  UserIcon
} from 'Assets/svgs';

const Icons = {
  Calendar,
  Check,
  Chevron,
  Dumbell,
  Envelope,
  Exit,
  Eye,
  Home,
  IdCard,
  Media,
  NoPlans,
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
