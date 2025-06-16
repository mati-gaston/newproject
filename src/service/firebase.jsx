// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP608hVKdqzeMLPFQLCrefxj270eYCjaw",
  authDomain: "burguerproject-bd46f.firebaseapp.com",
  projectId: "burguerproject-bd46f",
  storageBucket: "burguerproject-bd46f.firebasestorage.app",
  messagingSenderId: "451244643953",
  appId: "1:451244643953:web:ca2ccf14662db1dc9badd0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 