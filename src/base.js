import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcy6MpMjfp4VaE8ItZBKVrXzCbXtyz6Ag",
  authDomain: "very-hot-burgers-b1913.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-b1913-default-rtdb.firebaseio.com",
  projectId: "very-hot-burgers-b1913",
  storageBucket: "very-hot-burgers-b1913.appspot.com",
  messagingSenderId: "384061606781",
  appId: "1:384061606781:web:28f8313915ed8e14a81a14",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
