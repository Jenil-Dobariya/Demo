// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9DuQ_bzpecL1BDdHneboYVZQgYDy90OQ",
    authDomain: "portal-e0b1c.firebaseapp.com",
    projectId: "portal-e0b1c",
    storageBucket: "portal-e0b1c.appspot.com",
    messagingSenderId: "731645634558",
    appId: "1:731645634558:web:ab1a1610b6c1bb17ab02af"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);




