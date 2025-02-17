import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCqeHEe9IwPG7kWJ4JyMDkZo2rieU0vIOA",
  authDomain: "login-arcadia-aa09b.firebaseapp.com",
  projectId: "login-arcadia-aa09b",
  storageBucket: "login-arcadia-aa09b.firebasestorage.app",
  messagingSenderId: "171895796227",
  appId: "1:171895796227:web:e94e8b80d961d38e9d1436",
  measurementId: "G-33ZCN0HXJY"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{ auth };