// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fares-estate.firebaseapp.com",
  projectId: "fares-estate",
  storageBucket: "fares-estate.appspot.com",
  messagingSenderId: "1037825960786",
  appId: "1:1037825960786:web:e198c77eda929ac2ce288b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
