import { classNames } from 'Helpers';

export const onClick = ({
  selectedIndex,
  setSelectedIndex,
  lastIndex,
  isNext = false
}) => {
  if (isNext && selectedIndex === lastIndex) {
    setSelectedIndex(0);
    return;
  }
  if (selectedIndex === 0 && !isNext) {
    setSelectedIndex(lastIndex);
    return;
  }
  if (isNext) setSelectedIndex(prev => prev + 1);
  else setSelectedIndex(prev => prev - 1);
};

export const renderPhoto = ({ selectedIndex, lastIndex }, photo, index) => {
  const numberOfPhotosFirst = selectedIndex === 0 ? 2 : 1;
  const numberOfPhotosLast = selectedIndex === lastIndex ? 2 : 1;

  return (
    <img
      src={photo}
      key={index}
      className={classNames(
        'w-64 h-64 transition-all duration-500',
        selectedIndex !== index && 'scale-100 opacity-60',
        selectedIndex === index && 'scale-110 opacity-100',
        (index > selectedIndex + numberOfPhotosFirst ||
          index < selectedIndex - numberOfPhotosLast) &&
          'hidden'
      )}
    />
  );
};
