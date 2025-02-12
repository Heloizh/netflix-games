// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqeHEe9IwPG7kWJ4JyMDkZo2rieU0vIOA",
  authDomain: "login-arcadia-aa09b.firebaseapp.com",
  projectId: "login-arcadia-aa09b",
  storageBucket: "login-arcadia-aa09b.firebasestorage.app",
  messagingSenderId: "171895796227",
  appId: "1:171895796227:web:e94e8b80d961d38e9d1436",
  measurementId: "G-33ZCN0HXJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);