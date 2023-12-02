import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from './firebaseConfig';

const getDayWorkouts = ({ collectionPath, date }) => {
  const collectionRef = collection(db, collectionPath);

  const q = query(collectionRef, where('date', '==', date));

  return getDocs(q);
};

export default { getDayWorkouts };
