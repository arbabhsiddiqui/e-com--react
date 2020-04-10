import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUAg5rMGbhFihbe8hkaQAPsyu3_PIr0X4",
  authDomain: "crown-5c58a.firebaseapp.com",
  databaseURL: "https://crown-5c58a.firebaseio.com",
  projectId: "crown-5c58a",
  storageBucket: "crown-5c58a.appspot.com",
  messagingSenderId: "727161870668",
  appId: "1:727161870668:web:11b04b9ff76c3c6b0717e9",
  measurementId: "G-YC7KV0VFGW",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error while creating user", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
