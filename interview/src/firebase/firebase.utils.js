import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyD6JIu-OBsqfDK2m31z80-yMw-o5rnAAPQ",
  authDomain: "crowndb-cbee0.firebaseapp.com",
  databaseURL: "https://crowndb-cbee0.firebaseio.com",
  projectId: "crowndb-cbee0",
  storageBucket: "crowndb-cbee0.appspot.com",
  messagingSenderId: "801638021171",
  appId: "1:801638021171:web:85d95b85e966bfe9d04b46",
  measurementId: "G-PNLBC5YPVX"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
