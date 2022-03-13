import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBxlyNGWlDyITXQJ5rBFB8pv0GYCfRgvj8",
  authDomain: "librarytransaction.firebaseapp.com",
  projectId: "librarytransaction",
  storageBucket: "librarytransaction.appspot.com",
  messagingSenderId: "88654401485",
  appId: "1:88654401485:web:2051473041624062a5fe84"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
