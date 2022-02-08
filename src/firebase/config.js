// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzkIZwGpwhno6uXCIMRO32MYiDNd60zgM",
    authDomain: "overvueing.firebaseapp.com",
    projectId: "overvueing",
    storageBucket: "overvueing.appspot.com",
    messagingSenderId: "159596704070",
    appId: "1:159596704070:web:b28b0a74315023d837f547",
    measurementId: "G-P0SGG7RRRE"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// Initialize Firebase auth
const auth = getAuth();
export { db, auth }