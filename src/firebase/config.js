import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBNKV5SlInoxQiF-LQo71batBgh2tB4oBA",
  authDomain: "reactphotostudio.firebaseapp.com",
  databaseURL: "https://reactphotostudio-default-rtdb.firebaseio.com/",
  projectId: "reactphotostudio",
  storageBucket: "reactphotostudio.appspot.com",
  messagingSenderId: "425755016693",
  appId: "1:425755016693:web:d1744143dd84339b37f4bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };