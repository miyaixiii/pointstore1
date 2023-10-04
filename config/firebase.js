// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbRfk-CztrUEfIGFtgPNRa3CRm-QiQdFk",
  authDomain: "gt-db-b8189.firebaseapp.com",
  databaseURL: "https://gt-db-b8189-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gt-db-b8189",
  storageBucket: "gt-db-b8189.appspot.com",
  messagingSenderId: "672106984955",
  appId: "1:672106984955:web:f548bfa7b1e24dfbe7475e",
  measurementId: "G-XWGQ99Y61W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);







