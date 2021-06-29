import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq9uq-PmGeWmLySVSVlWJUXnqflFDYKPA",
  authDomain: "drive-clone-6d1d5.firebaseapp.com",
  projectId: "drive-clone-6d1d5",
  storageBucket: "drive-clone-6d1d5.appspot.com",
  messagingSenderId: "965213284101",
  appId: "1:965213284101:web:b2f85bc9bace4e1966f96c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
