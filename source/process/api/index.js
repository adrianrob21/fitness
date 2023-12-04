import axios from 'axios';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import queries from './queries';
import { auth, db } from './firebaseConfig';

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

  configure: callback => callback(),

  register: ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password),

  createDocument: ({ collectionPath, data }) =>
    addDoc(collection(db, collectionPath), data),

  getDocuments: ({ collectionPath }) => getDocs(collection(db, collectionPath)),

  login: ({ email, password }) => signInWithEmailAndPassword(auth, email, password),

  queries,

  logout: () => signOut(auth),

  post: (url, body, config = defaultConfig) => axiosInstance.post(url, body, config),
  put: (url, body, config = defaultConfig) => axiosInstance.put(url, body, config),
  patch: (url, body, config = defaultConfig) => axiosInstance.patch(url, body, config),

  delete: (url, config = defaultConfig) => axiosInstance.delete(url, config)
};
