import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5q864mdH3qsbSbr-xKWIzHsWvEwZ9RS0",
  authDomain: "drive-clone-c3c62.firebaseapp.com",
  projectId: "drive-clone-c3c62",
  storageBucket: "drive-clone-c3c62.appspot.com",
  messagingSenderId: "696876222450",
  appId: "1:696876222450:web:1862ff432e6e8b7026cd6b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
