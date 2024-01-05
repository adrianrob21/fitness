import { mock, formatDate } from 'Helpers';

export const handleFileInput = (updateProps, fileUrl) => {
  updateProps({ selectedImage: fileUrl });
};

export const onDateChange = ({ updateMediaProps = mock }, date) => {
  updateMediaProps({ selectedDate: formatDate({ date }) });
};
