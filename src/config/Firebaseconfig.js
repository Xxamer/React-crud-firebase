import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBXW3xD-5n_53fHRenlMnioGlj5xvVsu08",
    authDomain: "react-firebase-6a9e4.firebaseapp.com",
    projectId: "react-firebase-6a9e4",
});

let db = firebase.firestore();

export default db;