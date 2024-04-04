import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYktk4Ux-rD7QkiFtqPjIGmdX0E1FtyH0",
    authDomain: "cafeteria-720cb.firebaseapp.com",
    projectId: "cafeteria-720cb",
    storageBucket: "cafeteria-720cb.appspot.com",
    messagingSenderId: "1052200271980",
    appId: "1:1052200271980:web:94933d87243581435bd849"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };