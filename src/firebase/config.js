import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDXBy-NZuQMYuTE04P48peQM5lXwtNtq6E",
  authDomain: "firegram-548d5.firebaseapp.com",
  databaseURL: "https://firegram-548d5.firebaseio.com",
  projectId: "firegram-548d5",
  storageBucket: "firegram-548d5.appspot.com",
  messagingSenderId: "424990566616",
  appId: "1:424990566616:web:0b70f6cf67ecd0d5c64fad",
  measurementId: "G-WWTLQD1ENB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };