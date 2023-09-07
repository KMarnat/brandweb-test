// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEQnSyYelZvkIHbz71euEFqPD5R2XfBTg',
  authDomain: 'bw-test-477cc.firebaseapp.com',
  projectId: 'bw-test-477cc',
  storageBucket: 'bw-test-477cc.appspot.com',
  messagingSenderId: '428094770761',
  appId: '1:428094770761:web:faf4458261113fe83bb998',
  measurementId: 'G-L1GJPSHXDP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(firebaseConfig);
// connectAuthEmulator(auth, 'http://localhost:3000');

export const db = getFirestore(app);
