// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-86d81.firebaseapp.com",
  projectId: "mern-estate-86d81",
  storageBucket: "mern-estate-86d81.appspot.com",
  messagingSenderId: "383007836946",
  appId: "1:383007836946:web:c5ed0a738076e863d281cb",
  measurementId: "G-C5TBEVGQZ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);