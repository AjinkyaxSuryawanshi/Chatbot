// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSt3io73SDudpm2wUHDqRZq4fU7YPL9zU",
  authDomain: "dojo-81d05.firebaseapp.com",
  projectId: "dojo-81d05",
  storageBucket: "dojo-81d05.firebasestorage.app",
  messagingSenderId: "32806906622",
  appId: "1:32806906622:web:08b35c33258267177413af",
  measurementId: "G-73EH83FG36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
