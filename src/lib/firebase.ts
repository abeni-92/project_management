import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJFqprMZjRzUJHxRSv3dYHoHCwWeUnkh0",
  authDomain: "project-management-29ef9.firebaseapp.com",
  projectId: "project-management-29ef9",
  storageBucket: "project-management-29ef9.appspot.com",
  messagingSenderId: "400659705887",
  appId: "1:400659705887:web:4344d604ce0f242343e52a",
  measurementId: "G-YBYNQZFDJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };