// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeKccpoJCKxXGsRzg1L9TkDf7Y1g9KzKE",
  authDomain: "myfirstapp-538f9.firebaseapp.com",
  projectId: "myfirstapp-538f9",
  storageBucket: "myfirstapp-538f9.appspot.com",
  messagingSenderId: "981366749971",
  appId: "1:981366749971:web:85ee02deff6d565272f8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB , auth}