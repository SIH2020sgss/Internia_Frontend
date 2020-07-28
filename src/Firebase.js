import * as firebase from "firebase/app";
import "firebase/auth";
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
  measurementId: "G-FV1JZEF1ED"
};

// var admin = require("firebase-admin");

// var serviceAccount = require("./internia-cb348-firebase-adminsdk-ic7tt-8599d57809.json");

// export const admin_app = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://internia-cb348.firebaseio.com"
// });

const app = firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }

// export const RecaptchaVerifier = firebase.auth.RecaptchaVerifier;
export default app;
