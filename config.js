import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCmCRVj0yEr-sUJtpNPXFuq9BK4oXXV1mw",
  authDomain: "class70-3d5ec.firebaseapp.com",
  projectId: "class70-3d5ec",
  storageBucket: "class70-3d5ec.appspot.com",
  messagingSenderId: "1063009657627",
  appId: "1:1063009657627:web:419bee9fc0c20336b1a9be"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
