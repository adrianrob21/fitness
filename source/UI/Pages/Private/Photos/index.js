import { connect } from 'react-redux';

import { mediaSliceActions } from 'Reducers/mediaSlice';

import Photos from './view';

export default connect(
  state => ({
    selectedImage: state.mediaSlice?.selectedImage,
    processingFile: state.transientSlice?.processingFile,
    selectedDate: state.mediaSlice?.selectedDate
  }),
  {
    uploadFile: mediaSliceActions.uploadFile,
    updateMediaProps: mediaSliceActions.updateProps
  }
)(Photos);
