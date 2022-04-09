// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrz5gJEslUMeKZXfzB4lJ0LM7b7i3r5UM",
  authDomain: "router-firebase-integrat-a38ed.firebaseapp.com",
  projectId: "router-firebase-integrat-a38ed",
  storageBucket: "router-firebase-integrat-a38ed.appspot.com",
  messagingSenderId: "993636015163",
  appId: "1:993636015163:web:99a4dbb902d07c5bb1901e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
