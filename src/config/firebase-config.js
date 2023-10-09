// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsWteVChx3kug28E9cma6Jm7wuxLFdZ4Q",
  authDomain: "expense-tracker-73153.firebaseapp.com",
  projectId: "expense-tracker-73153",
  storageBucket: "expense-tracker-73153.appspot.com",
  messagingSenderId: "664518136163",
  appId: "1:664518136163:web:104616b53c5660607ac356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
