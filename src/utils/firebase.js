import firebase from 'firebase';
// import { FirebaseConfig } from '../config/keys';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBmb_K3upIWW7YorMyN8FaZr4SnYOpot_I',
  authDomain: 'trivia-599e3.firebaseapp.com',
  databaseURL: 'https://trivia-599e3.firebaseio.com',
  projectId: 'trivia-599e3',
  storageBucket: 'trivia-599e3.appspot.com',
  messagingSenderId: '1029977879900',
});

const database = firebaseApp.database();
const auth = firebaseApp.auth();

export { database, auth };
