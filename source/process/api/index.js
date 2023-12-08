import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import axios from 'axios';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import queries from './queries';
import { auth, db } from './firebaseConfig';
import { getUserId } from './queries';

const axiosInstance = axios.create({
  timeout: 30000,
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json'
  }
});

const defaultConfig = {};

const success = data => data;

const fail = error => Promise.reject(error);

axiosInstance.interceptors.response.use(success, fail);

export const Api = {
  apiType: 'API',

  register: ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password),

  createDocument: ({ collectionPath, data }) =>
    addDoc(collection(db, collectionPath), data),

  getDocuments: ({ collectionPath }) => {
    const collectionRef = collection(db, collectionPath);

    const q = query(collectionRef, where('userId', '==', getUserId()));

    return getDocs(q);
  },

  login: ({ email, password }) => signInWithEmailAndPassword(auth, email, password),

  queries,

  logout: () => signOut(auth)
};
