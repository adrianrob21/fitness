import PropTypes from 'prop-types';

import { classNames, mock } from 'Helpers';

const Modal = ({
  children = null,
  modalName = '',
  setVisible = mock,
  visible = true
}) => {
  return (
    <>
      <div
        onClick={setVisible.bind(null, { [modalName]: false })}
        className={classNames(
          'absolute h-full w-full z-40 transition-all duration-700 hover:cursor-pointer',
          !visible && 'opacity-30 hidden backdrop-blur-0',
          visible && 'opacity-100 backdrop-blur-lg'
        )}
      />
      <div
        className={classNames(
          'h-64 w-64 bg-black rounded-xl absolute left-0 z-50 right-0 mr-auto duration-200 transition-all ml-auto mt-auto mb-auto top-0 bottom-0',
          !visible && 'scale-0',
          visible && 'scale-100 visible'
        )}>
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  modalName: PropTypes.string,
  setVisible: PropTypes.func,
  visible: PropTypes.bool
};

export default Modal;
