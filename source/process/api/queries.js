import { store } from 'ReduxStore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';

import { userSliceActions } from 'Reducers/userSlice';

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

function base64toBlob(base64String, contentType = 'image/png') {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
}

const uploadFile = ({ folderName, image, userId }) => {
  const imageRef = ref(storage, `${folderName}/${userId}/profileImage.png`);
  const formatedImage = image.replace(/^data:image\/(jpeg|png|gif|bmp);base64,/, '');

  const blob = base64toBlob(formatedImage);

  const uploadTask = uploadBytesResumable(imageRef, blob);

  uploadTask.on('state_changed', null, null, () => {
    store.dispatch(userSliceActions.updateProps({ userSession: true }));

    return;
  });
};

const getProfilePicture = userId => {
  const profilePictureRef = ref(storage, `profileImages/${userId}/profileImage.png`);

  getDownloadURL(profilePictureRef)
    .then(profile => {
      store.dispatch(userSliceActions.updateProps({ profilePicture: profile }));
    })
    .catch(error => {
      console.log(error);
    });
};

export default { getDayWorkouts, getProfilePicture, updateExercise, uploadFile };
