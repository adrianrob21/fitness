import { mock, classNames } from 'Helpers';

export const renderOptionButton = (
  { alreadySelected, lastIndex, multipleSelect, selectedItem, updateProps },
  { label, value },
  index
) => {
  const isSelected = alreadySelected.includes(value) || value === selectedItem;
  const isLast = index === lastIndex;

  const data = multipleSelect
    ? isSelected
      ? { selectedCategories: alreadySelected.filter(item => item !== value) }
      : { selectedCategories: [...alreadySelected, value] }
    : { selectedItem: value };

  return (
    <p
      onClick={isSelected && !multipleSelect ? mock : updateProps.bind(null, data)}
      className={classNames(
        'text-white p-4 text-center relative md:hover:bg-primary-900',
        isLast && 'rounded-b-2xl',
        isSelected && 'bg-primary-900',
        !isLast && 'border-b-white border-b-[1px]'
      )}>
      {label}
    </p>
  );
};
