// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBuDcV1DzmtkkspbwkWjtyVwCa-vbHbNEM",
  authDomain: "final-project-917b6.firebaseapp.com",
  projectId: "final-project-917b6",
  storageBucket: "final-project-917b6.appspot.com",
  messagingSenderId: "1023470754891",
  appId: "1:1023470754891:web:1446a8d4493977c4ca01ce",
  measurementId: "G-ZVN3VGKNGZ",
  databaseURL: "https://final-projectAS.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
