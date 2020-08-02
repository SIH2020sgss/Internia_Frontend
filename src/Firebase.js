import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClItHGnOvx0hno0CTh7vrZzSeUgjtWVaE",
  authDomain: "internia-cb348.firebaseapp.com",
  databaseURL: "https://internia-cb348.firebaseio.com",
  projectId: "internia-cb348",
  storageBucket: "internia-cb348.appspot.com",
  messagingSenderId: "33631131980",
  appId: "1:33631131980:web:e890a41f7da48bfc2357e9",
  measurementId: "G-FV1JZEF1ED",
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.firestore();
firebase.storage();
firebase.analytics();

export default firebase;
