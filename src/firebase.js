// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd6QDg6J_YdKgzEkmGT1fT_VhkLsCk_dU",
  authDomain: "my-jpvoca.firebaseapp.com",
  projectId: "my-jpvoca",
  storageBucket: "my-jpvoca.appspot.com",
  messagingSenderId: "785176081744",
  appId: "1:785176081744:web:0bf1e56ad7945504fc2855",
  measurementId: "G-D9NLQYQSXX"
};


// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

