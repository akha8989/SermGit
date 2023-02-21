// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth}  from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARNiHuMOTbtCOo7SXbKRcjoNkXzjAOxkI",
  authDomain: "sermappdb.firebaseapp.com",
  projectId: "sermappdb",
  storageBucket: "sermappdb.appspot.com",
  messagingSenderId: "107106217733",
  appId: "1:107106217733:web:88f9d76bbf678859dd916c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);