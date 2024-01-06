import { classNames, formatDate } from 'Helpers';

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
  const hide =
    (index > selectedIndex + numberOfPhotosFirst ||
      index < selectedIndex - numberOfPhotosLast) &&
    'hidden';

  return (
    <div className={'relative'}>
      <img
        src={photo.url}
        key={photo.id}
        className={classNames(
          'w-64 h-64 transition-all duration-500 rounded-xl object-cover',
          selectedIndex !== index && 'scale-100 opacity-60 grayscale',
          selectedIndex === index && 'scale-110 opacity-100 grayscale-0',
          hide
        )}
      />
      <div
        className={classNames(
          'absolute bottom-0 transition-all bg-black p-2 rounded-lg duration-200',
          selectedIndex !== index && 'scale-75 grayscale',
          selectedIndex === index && 'scale-110 grayscale-0',
          hide
        )}>
        <h1 className={'text-white'}>
          {formatDate({ date: photo.date, format: 'descriptive' })}
        </h1>
      </div>
    </div>
  );
};
