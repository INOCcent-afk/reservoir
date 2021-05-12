import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "reservoir-99611.firebaseapp.com",
  projectId: "reservoir-99611",
  storageBucket: "reservoir-99611.appspot.com",
  messagingSenderId: "263083622049",
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: "G-2Q8RGDE73F",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
