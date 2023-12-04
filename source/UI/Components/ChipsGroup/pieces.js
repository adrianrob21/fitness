import { classNames } from 'Helpers';

export const renderChip = (
  { hasDelete, keyToUpdate, selectedValues, updateProps },
  { label, value }
) => {
  const newValues = selectedValues.filter(item => item !== value);

  return (
    <div
      className={classNames(
        'rounded-2xl bg-white mt-2 ml-1 mr-1 max-h-5 flex items-center space-x-10 text-black pt-4 pl-2 pr-1 pb-4',
        'animate-in zoom-in'
      )}>
      <p className={'text-black text-2xl'}>{label}</p>
      {hasDelete && (
        <div
          onClick={updateProps.bind(null, { [keyToUpdate]: newValues })}
          className={
            'font-bold text-white flex justify-center hover:cursor-pointer bg-error rounded-[100%] w-6 h-6'
          }>
          X
        </div>
      )}
    </div>
  );
};
