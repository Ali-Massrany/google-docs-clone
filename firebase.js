import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACf68t0dB5WN3UNFrpnlHcWFSSf30da7w",
  authDomain: "docs-fee5a.firebaseapp.com",
  projectId: "docs-fee5a",
  storageBucket: "docs-fee5a.appspot.com",
  messagingSenderId: "432424145278",
  appId: "1:432424145278:web:e4f6369bcb9b5ad4bea32f",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
