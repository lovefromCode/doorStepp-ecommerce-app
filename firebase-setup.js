// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqb-Gwkr00LipHoqFutrI0zzpqyKQkBc",
  authDomain: "food-app-422e0.firebaseapp.com",
  projectId: "food-app-422e0",
  storageBucket: "food-app-422e0.appspot.com",
  messagingSenderId: "95282117966",
  appId: "1:95282117966:web:331b806eff8b0fc218321f"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);