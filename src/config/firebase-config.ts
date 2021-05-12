import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwSrXSDPJmRjTTqIJi5tFSH2hL7_3iBXk",
  authDomain: "reservoir-99611.firebaseapp.com",
  projectId: "reservoir-99611",
  storageBucket: "reservoir-99611.appspot.com",
  messagingSenderId: "263083622049",
  appId: "1:263083622049:web:c23c7a9650fba9ef42bae0",
  measurementId: "G-2Q8RGDE73F",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
