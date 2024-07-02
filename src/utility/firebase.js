// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUmOfoTtlCaRdBz8rkLA5_9YxfQbKS4f0",
  authDomain: "aroma-cafe-807fa.firebaseapp.com",
  projectId: "aroma-cafe-807fa",
  storageBucket: "aroma-cafe-807fa.appspot.com",
  messagingSenderId: "1035367212956",
  appId: "1:1035367212956:web:e39140d913a8b1150d8a59",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const singUp = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};
export const singIn = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};
export const singOut = async (email, password) => {
  try {
    const result = await signOut(auth);
    return result;
  } catch (error) {
    return error;
  }
};

export const signUpGoogle = async () => {
  try {
    const popUp = await signInWithPopup(auth, provider);
    const response = popUp;
    return response;
  } catch (error) {
    return error;
    console.log(error);
  }
};
