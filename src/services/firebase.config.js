// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAPsioMU8PEHOHCWF-YumIuWzgFyUQikhw',
  authDomain: 'shaped-triode-398010.firebaseapp.com',
  projectId: 'shaped-triode-398010',
  storageBucket: 'shaped-triode-398010.appspot.com',
  messagingSenderId: '727676705194',
  appId: '1:727676705194:web:3ac3714780b16f7255b3d3',
  measurementId: 'G-8LX00JWJG0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
