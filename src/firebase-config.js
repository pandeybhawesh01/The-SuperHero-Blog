/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcDkrrVg3M4_lWTBIGTyD-OgcsgQEYXM4",
  authDomain: "my-blog-dc8a8.firebaseapp.com",
  projectId: "my-blog-dc8a8",
  storageBucket: "my-blog-dc8a8.appspot.com",
  messagingSenderId: "43113385367",
  appId: "1:43113385367:web:4bc11af8edbb9cd2bc48d2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const imageDB = getStorage(app);