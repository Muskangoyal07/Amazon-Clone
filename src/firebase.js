// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "you API key",
  authDomain: "clone-78733.firebaseapp.com",
  projectId: "clone-78733",
  storageBucket: "clone-78733.appspot.com",
  messagingSenderId: "853172309286",
  appId: "1:853172309286:web:c75f97c49986f2177f45e7",
  measurementId: "G-GX5MRTQPBR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(firebaseApp);

// Get an Auth instance
const auth = getAuth(firebaseApp);

export { db, auth };
