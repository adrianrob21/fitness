import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { store } from 'ReduxStore';

import { db } from './firebaseConfig';

export const getUserId = () => store?.getState()?.userSlice.userId;

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

export default { getDayWorkouts, updateExercise };
