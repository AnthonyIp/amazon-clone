import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey           : "AIzaSyA1rb7ism0Vicd1a8C_TOFDB8cvUYMCiys",
    authDomain       : "clone-b1ddb.firebaseapp.com",
    databaseURL      : "https://clone-b1ddb.firebaseio.com",
    projectId        : "clone-b1ddb",
    storageBucket    : "clone-b1ddb.appspot.com",
    messagingSenderId: "39275834419",
    appId            : "1:39275834419:web:9369bd8cf2ded8d3e5c746",
    measurementId    : "G-E9W1PXM5WD"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
