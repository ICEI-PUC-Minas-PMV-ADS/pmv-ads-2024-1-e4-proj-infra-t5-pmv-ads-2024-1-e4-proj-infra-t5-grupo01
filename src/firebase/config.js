import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt-QYo9qRqcRfJkk0WcIBiaBJFEV4jK1M",
  authDomain: "blucoffee-ae7ef.firebaseapp.com",
  projectId: "blucoffee-ae7ef",
  storageBucket: "blucoffee-ae7ef.appspot.com",
  messagingSenderId: "135210878858",
  appId: "1:135210878858:web:51cbd504a749d6d633ea73",
  measurementId: "G-HVRBBQRL10"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };