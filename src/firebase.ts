// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};
// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCUTwWZSSrMw9O0T4jZUVeKdJi0uSNcpQ8",
  authDomain: "malachite-ecommerce.firebaseapp.com",
  projectId: "malachite-ecommerce",
  storageBucket: "malachite-ecommerce.appspot.com",
  messagingSenderId: "333640482827",
  appId: "1:333640482827:web:c6e78dd4d2a237e679c70e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
