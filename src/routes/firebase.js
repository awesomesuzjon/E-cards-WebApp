import firebase from "firebase/app"
import "firenase/auth"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDlU6xFnGxWJICj7pvyrfju-5y4rSSBZiU",
    authDomain: "ecards-6bb1e.firebaseapp.com",
    projectId: "ecards-6bb1e",
    storageBucket: "ecards-6bb1e.appspot.com",
    messagingSenderId: "658024761124",
    appId: "1:658024761124:web:e926eaa7fb3811383395b1",
    measurementId: "G-09NY2M1FT6"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore();