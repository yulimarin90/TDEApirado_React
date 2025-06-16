// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDrx1aSgr24w4-w97BXUsbC0s1TbaHVOc",
    authDomain: "paginafalsa-b623d.firebaseapp.com",
    projectId: "paginafalsa-b623d",
    storageBucket: "paginafalsa-b623d.firebasestorage.app",
    messagingSenderId: "63512693832",
    appId: "1:63512693832:web:16632de7c6d88462dddc7d",
    measurementId: "G-PP75GJTYWZ"
};

const app = initializeApp(firebaseConfig);

// Realtime Database:
const db = getFirestore(app);
// Firestore:
// const db = getFirestore(app);

export { db };
