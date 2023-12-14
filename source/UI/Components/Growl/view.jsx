import { useEffect } from 'react';
import PropTypes from 'prop-types';

const variants = {
  success: 'border-green border-4',
  error: 'border-error border-4'
};

const Growl = ({
  growlActive = false,
  message = '',
  updateGrowlProps = mock,
  growlType
}) => {
  console.log(growlType);

  useEffect(() => {
    if (growlActive) {
      const timeoutId = setTimeout(() => {
        updateGrowlProps({ growlActive: false });
      }, 4000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [growlActive]);

  return (
    growlActive && (
      <div
        className={`absolute bottom-10 right-0 left-0 mr-auto rounded-md animate-bounce ml-auto max-w-sm bg-white ${variants[growlType]}`}>
        <p className={'text-center p-1'}>{message}</p>
      </div>
    )
  );
};

Growl.propTypes = {
  growlActive: PropTypes.bool,
  growlType: PropTypes.string,
  message: PropTypes.string,
  updateGrowlProps: PropTypes.func
};

export default Growl;
