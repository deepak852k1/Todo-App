import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0sfJaFOhFfrYP57cV50Te23NbaDpZ3Og",
  authDomain: "react-todo-69b02.firebaseapp.com",
  projectId: "react-todo-69b02",
  storageBucket: "react-todo-69b02.appspot.com",
  messagingSenderId: "569648791106",
  appId: "1:569648791106:web:58d85202fa7d3cf53e77db"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db } 