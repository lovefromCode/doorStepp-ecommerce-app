// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
