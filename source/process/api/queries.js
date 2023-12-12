import { store } from 'ReduxStore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
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

const uploadFile = ({ folderName, image, userId }) => {
  console.log(image);
  const imageRef = ref(storage, `${folderName}/${userId}/profileImage.png`);
  const formatedImage = image.replace(/^data:image\/(jpeg|png|gif|bmp);base64,/, '');

  return uploadString(imageRef, formatedImage, 'base64');
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
