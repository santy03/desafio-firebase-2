// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsK2JUZpO9my2AoE7zagkmmhVrKDbif-k",
  authDomain: "la-casa-del-deporte.firebaseapp.com",
  projectId: "la-casa-del-deporte",
  storageBucket: "la-casa-del-deporte.appspot.com",
  messagingSenderId: "180154368300",
  appId: "1:180154368300:web:2eab31ca6585c455b7ac89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;