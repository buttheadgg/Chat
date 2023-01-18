import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYB47pjmwNBp0KJwSQf9Ki4P2v-LSR9YU",
  authDomain: "mychat-c5c63.firebaseapp.com",
  projectId: "mychat-c5c63",
  storageBucket: "mychat-c5c63.appspot.com",
  messagingSenderId: "158454615456",
  appId: "1:158454615456:web:f327b0c8e1e487d410a8c5",
  measurementId: "G-EXM9CWF62R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
