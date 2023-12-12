import PropTypes from 'prop-types';

import { PhotoInput } from 'Components';
import { classNames, mock } from 'Helpers';

import { renderInput } from '../renderFunctions';

const onFileInput = (updateTransientProps, fileUrl) => {
  updateTransientProps({ profileImage: fileUrl });
};

const PageLayout = ({
  Button = null,
  ExtraContent = null,
  hasPhotoInput = false,
  inputs = [],
  inputsValues = {},
  PageFooter = null,
  PageHeader = null,
  profileImage = '',
  updatePropsWithValidation = mock,
  updateTransientProps = mock
}) => (
  <main className={'pt-24 space-y-10'}>
    <div className={'w-full flex flex-col items-center space-y-2 justify-center'}>
      {PageHeader}
    </div>
    <form className={'min-w-4xl max-w-md pr-4 pl-4 shrink ml-auto mr-auto space-y-4'}>
      <div className={'flex w-full justify-center'}>
        {hasPhotoInput && (
          <PhotoInput
            source={profileImage}
            onChange={onFileInput.bind(null, updateTransientProps)}
          />
        )}
      </div>
      {inputs.map(renderInput.bind(null, { updatePropsWithValidation, inputsValues }))}
      <div className={classNames(!ExtraContent && 'h-4')}>{ExtraContent}</div>
      {Button}
    </form>
    <div className={'w-full flex flex-col items-center justify-center'}>{PageFooter}</div>
  </main>
);

PageLayout.propTypes = {
  Button: PropTypes.element,
  ExtraContent: PropTypes.element,
  hasPhotoInput: PropTypes.bool,
  inputs: PropTypes.array,
  inputsValues: PropTypes.object,
  PageFooter: PropTypes.element,
  PageHeader: PropTypes.element,
  profileImage: PropTypes.string,
  updatePropsWithValidation: PropTypes.func,
  updateTransientProps: PropTypes.func
};

export default PageLayout;
