import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { onClick, renderPhoto } from './bindings';

const PhotosCarousel = ({ photos = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const lastIndex = photos.length - 1;

  return (
    <div className={'flex space-x-5 justify-center items-center'}>
      <div
        className={'hover:cursor-pointer'}
        onClick={onClick.bind(null, { setSelectedIndex, selectedIndex, lastIndex })}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: '#ffffff' }}
          size={'2x'}
          opacity={0.5}
        />
      </div>
      {photos.map(renderPhoto.bind(null, { selectedIndex, lastIndex }))}
      <div
        className={'hover:cursor-pointer'}
        onClick={onClick.bind(null, {
          selectedIndex,
          setSelectedIndex,
          lastIndex,
          isNext: true
        })}>
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ color: '#ffffff' }}
          size={'2x'}
          opacity={0.5}
        />
      </div>
    </div>
  );
};

PhotosCarousel.propTypes = {
  photos: PropTypes.array
};

export default PhotosCarousel;
