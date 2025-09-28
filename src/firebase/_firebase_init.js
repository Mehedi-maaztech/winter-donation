// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjUlnyM-e8i4ypGdjH6r4yFupytonJtb8",
  authDomain: "winter-donation-5acb2.firebaseapp.com",
  projectId: "winter-donation-5acb2",
  storageBucket: "winter-donation-5acb2.firebasestorage.app",
  messagingSenderId: "565777089033",
  appId: "1:565777089033:web:adef01d401d98ba0e52ed8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;