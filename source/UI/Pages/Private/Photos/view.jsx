import PropTypes from 'prop-types';

import { mock, formatDate } from 'Helpers';
import { ContentContainer, Card, MainLayout } from 'Containers';
import { PhotosCarousel, PhotoInput, Button, Calendar } from 'Components';

import { handleFileInput, onDateChange } from './bindings';

const Photos = ({
  photos = [],
  processingFile = false,
  selectedDate = formatDate({ date: new Date() }),
  selectedImage = '',
  updateMediaProps = mock,
  uploadFile = mock
}) => (
  <MainLayout>
    <ContentContainer>
      <Card width={'full'}>
        <div className={'flex w-full space-x-16'}>
          <div className={'space-y-5'}>
            <PhotoInput
              size={'preview'}
              shape={'square'}
              source={selectedImage}
              onChange={handleFileInput.bind(null, updateMediaProps)}
            />
            <Button
              label={'Save photo'}
              processing={processingFile}
              onClick={uploadFile.bind(null, {
                folderName: 'bodyPhotos',
                image: selectedImage,
                imageName: selectedDate
              })}
            />
          </div>
          <div className={'flex flex-col justify-center'}>
            <Calendar
              onChange={onDateChange.bind(null, { updateMediaProps })}
              defaultValue={selectedDate}
            />
          </div>
        </div>
        <div className={'mt-32'}>
          <PhotosCarousel {...{ photos }} />
        </div>
      </Card>
    </ContentContainer>
    <ContentContainer>
      <h1 className={'text-xl text-white'}>Today's inspiration</h1>
      <Card />
    </ContentContainer>
  </MainLayout>
);

Photos.propTypes = {
  photos: PropTypes.array,
  processingFile: PropTypes.bool,
  selectedDate: PropTypes.string,
  selectedImage: PropTypes.string,
  updateMediaProps: PropTypes.func,
  uploadFile: PropTypes.func
};

export default Photos;
