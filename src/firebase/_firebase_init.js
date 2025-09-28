import getAuth from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBz3cuLjKfRn7TLmSbHPWYs8o-mRCajXDo",
  authDomain: "winter-donation-13812.firebaseapp.com",
  projectId: "winter-donation-13812",
  storageBucket: "winter-donation-13812.firebasestorage.app",
  messagingSenderId: "872887067697",
  appId: "1:872887067697:web:239bb26e58b683c8b1a110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;