// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIKXTjwtxURP0LRlatbXGlGCvnpXHYujU",
  authDomain: "bookshelf-2-0-ab51b.firebaseapp.com",
  projectId: "bookshelf-2-0-ab51b",
  storageBucket: "bookshelf-2-0-ab51b.appspot.com",
  messagingSenderId: "207729715896",
  appId: "1:207729715896:web:c171fa50cb0dd80e17224d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
