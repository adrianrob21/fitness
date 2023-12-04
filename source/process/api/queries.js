import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';

import { db } from './firebaseConfig';

const getDayWorkouts = ({ collectionPath, date }) => {
  const collectionRef = collection(db, collectionPath);

  const q = query(collectionRef, where('date', '==', date));

  return getDocs(q);
};

const updateExercise = ({ collectionPath, docId, body }) => {
  const docRef = doc(db, collectionPath, docId);

  return updateDoc(docRef, body);
};

export default { getDayWorkouts, updateExercise };
