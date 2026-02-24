// createAdmin.js - Script to create a default admin in Firestore
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSt3io73SDudpm2wUHDqRZq4fU7YPL9zU",
  authDomain: "dojo-81d05.firebaseapp.com",
  projectId: "dojo-81d05",
  storageBucket: "dojo-81d05.firebasestorage.app",
  messagingSenderId: "32806906622",
  appId: "1:32806906622:web:08b35c33258267177413af",
  measurementId: "G-73EH83FG36"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createAdmin() {
  try {
    await addDoc(collection(db, 'register'), {
      username: 'admin',
      email: 'admin@admin.com',
      password: 'admin123',
      role: 'admin',
      createdAt: new Date()
    });
    console.log('Admin created!');
  } catch (e) {
    console.error('Error:', e);
  }
}

createAdmin();