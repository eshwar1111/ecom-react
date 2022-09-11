import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGrDze8oy874eQKRO_PCXq732en7-JQG0",
    authDomain: "ecomm-bfd23.firebaseapp.com",
    projectId: "ecomm-bfd23",
    storageBucket: "ecomm-bfd23.appspot.com",
    messagingSenderId: "235248677317",
    appId: "1:235248677317:web:a828909ed5319ce2535bac",
    measurementId: "G-565KCJS0S8"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }