// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV75K1G3wHXPZer_-T45uJO4URLwz7ydU",
  authDomain: "second-fire-base-bcaef.firebaseapp.com",
  projectId: "second-fire-base-bcaef",
  storageBucket: "second-fire-base-bcaef.firebasestorage.app",
  messagingSenderId: "85595531212",
  appId: "1:85595531212:web:25734911ac07ae43799f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth code here now;

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);