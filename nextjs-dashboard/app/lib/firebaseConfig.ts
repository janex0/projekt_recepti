// lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALlVnagJiIEYr8eS8y0EO2fJMFlsPC2LI",
  authDomain: "recepti-4183d.firebaseapp.com",
  projectId: "recepti-4183d",
  storageBucket: "recepti-4183d.firebasestorage.app",
  messagingSenderId: "928995604850",
  appId: "1:928995604850:web:965d2f4c44ee6efd9005eb",
  measurementId: "G-M5FWZFJT6R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
