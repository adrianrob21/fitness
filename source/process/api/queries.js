import { store } from 'ReduxStore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';

import { base64toBlob } from 'Helpers';
import { userSliceActions } from 'Reducers/userSlice';
import { mediaSliceActions } from 'Reducers/mediaSlice';

import { db, storage } from './firebaseConfig';

export const getUserId = () => store?.getState()?.userSlice?.userId;

const getDayWorkouts = ({ collectionPath, date }) => {
  const collectionRef = collection(db, collectionPath);

  const q = query(
    collectionRef,
    where('date', '==', date),
    where('userId', '==', getUserId())
  );

  return getDocs(q);
};

const updateExercise = ({ collectionPath, docId, body }) => {
  const docRef = doc(db, collectionPath, docId);

  return updateDoc(docRef, body);
};

const uploadProfilePicture = ({ folderName, image, userId }) => {
  const imageRef = ref(storage, `${folderName}/${userId}/profileImage.png`);
  const formatedImage = image.replace(/^data:image\/(jpeg|png|gif|bmp);base64,/, '');

  const blob = base64toBlob(formatedImage);

  const uploadTask = uploadBytesResumable(imageRef, blob);

  uploadTask.on('state_changed', null, null, () => {
    store.dispatch(userSliceActions.updateProps({ userSession: true }));

    return;
  });
};

const uploadFile = ({ folderName, image, userId, imageName }) => {
  const regex = /^data:image\/(png|jpeg|jpg|gif);base64/;
  const formatedImage = image.replace(/^data:image\/(jpeg|png|gif|bmp);base64,/, '');

  let fileExtension = 'png';

  if (regex.test(image)) {
    fileExtension = image.match(regex);
  }

  const blob = base64toBlob(formatedImage);

  const fileRef = ref(
    storage,
    `${folderName}/${userId}/${imageName}.${fileExtension[1]}`
  );

  const uploadTask = uploadBytesResumable(fileRef, blob);

  uploadTask.on('state_changed', null, null, () => {
    store.dispatch(
      mediaSliceActions.getMediaURL({
        fileName: imageName,
        folderName: folderName,
        userId,
        fileExtension: fileExtension[1]
      })
    );

    return;
  });
};

const getProfilePicture = userId => {
  const profilePictureRef = ref(storage, `profileImages/${userId}/profileImage.png`);

  return getDownloadURL(profilePictureRef);
};

const getMediaURL = ({ fileName, folderName, userId, fileExtension }) => {
  const file = ref(storage, `${folderName}/${userId}/${fileName}.${fileExtension}`);

  return getDownloadURL(file);
};

export default {
  getDayWorkouts,
  getProfilePicture,
  updateExercise,
  getMediaURL,
  uploadFile,
  uploadProfilePicture
};
