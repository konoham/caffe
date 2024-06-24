// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWXwSqd4YvA2aFTRWKzQN0-GCvX-aoI1M",
  authDomain: "rabani-mart.firebaseapp.com",
  projectId: "rabani-mart",
  storageBucket: "rabani-mart.appspot.com",
  messagingSenderId: "834147071856",
  appId: "1:834147071856:web:3c1caded21a1b7812141b5",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const firebaseAuth = getAuth();
export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
};
export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const getOut = async () => {
  await signOut(firebaseAuth);
};
