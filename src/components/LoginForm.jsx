import React, {useState} from 'react';
import {auth} from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[message, setMessage] = useState("");
  
  const handleSignUp = async() => {
    try {
        
    }
  }


  return (
    <div>
      
    </div>
  )
}

export default LoginForm
