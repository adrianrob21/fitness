import PropTypes from 'prop-types';

import { classNames } from 'Helpers';

import { renderInput } from '../renderFunctions';

const PageLayout = ({
  Button = null,
  ExtraContent = null,
  inputs = [],
  PageFooter = null,
  PageHeader = null
}) => {
  console.log(inputs);

  return (
    <main className={'pt-24 space-y-10'}>
      <div className={'w-full flex flex-col items-center space-y-2 justify-center'}>
        {PageHeader}
      </div>
      <form className={'min-w-4xl max-w-md pr-4 pl-4 shrink ml-auto mr-auto space-y-4'}>
        {inputs.map(renderInput)}
        <div className={classNames(!ExtraContent && 'h-4')}>{ExtraContent}</div>
        {Button}
      </form>
      <div className={'w-full flex flex-col items-center justify-center'}>
        {PageFooter}
      </div>
    </main>
  );
};

PageLayout.propTypes = {
  Button: PropTypes.element,
  ExtraContent: PropTypes.element,
  inputs: PropTypes.array,
  PageFooter: PropTypes.element,
  PageHeader: PropTypes.element
};

export default PageLayout;
