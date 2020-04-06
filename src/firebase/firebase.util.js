import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATviLtXAE8L9Ttj1mb_JJInSrYG6oMasc",
  authDomain: "ecomtest-89091.firebaseapp.com",
  databaseURL: "https://ecomtest-89091.firebaseio.com",
  projectId: "ecomtest-89091",
  storageBucket: "ecomtest-89091.appspot.com",
  messagingSenderId: "80339299685",
  appId: "1:80339299685:web:14dffac0a47ef9bddfc58c",
  measurementId: "G-YHFDREBZP0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
