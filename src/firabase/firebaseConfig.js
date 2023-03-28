// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
//import { getStorage, ref, uploadByte } from 'firebase/storage';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBu9c1afzfIZ5yRrbNzhwFQLVItGnAZ10w',
  authDomain: 'clonairbnb-458c9.firebaseapp.com',
  projectId: 'clonairbnb-458c9',
  storageBucket: 'clonairbnb-458c9.appspot.com',
  messagingSenderId: '192672588182',
  appId: '1:192672588182:web:efb6e7c6a165748c187db7',
  measurementId: 'G-9BE70CJ3NP',
};

const firabase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firabase);
const db = getFirestore(firabase);
const auth = getAuth(firabase);
console.log(firabase);
console.log(auth);
export default { auth, firabase };
