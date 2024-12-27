import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 


const firebaseConfig = {
  apiKey: "AIzaSyCjYZjKpuYKFi6U6FBqBk_n2ss_hKMeVBg",
  authDomain: "transaction-management-e8259.firebaseapp.com",
  projectId: "transaction-management-e8259",
  storageBucket: "transaction-management-e8259.firebasestorage.app",
  messagingSenderId: "981738682575",
  appId: "1:981738682575:web:763f0daec64e4e76d81fba",
  measurementId: "G-N504T8Q0PV"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }