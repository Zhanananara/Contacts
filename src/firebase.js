// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYnxjoFXEU43aBfUDHP_AyAiYmx5ZLktY",
  authDomain: "reanimationn-274b3.firebaseapp.com",
  projectId: "reanimationn-274b3",
  storageBucket: "reanimationn-274b3.appspot.com",
  messagingSenderId: "252296438604",
  appId: "1:252296438604:web:3d7d18aae79180550ba5e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
