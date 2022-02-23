// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCxz_EHD8vjUN0AQvfDFun6pWmS32LpJ8",
  authDomain: "facebook-clone-73197.firebaseapp.com",
  projectId: "facebook-clone-73197",
  storageBucket: "facebook-clone-73197.appspot.com",
  messagingSenderId: "905021029162",
  appId: "1:905021029162:web:bc517cc8c4a3be1dea3c53",
  measurementId: "G-9BL0GB3PG7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;