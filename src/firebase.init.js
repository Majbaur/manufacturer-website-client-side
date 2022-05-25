// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQUZpjdUFCRV1cYYZyfN7XP_ZkQHvG9s",
  authDomain: "computer-parts-house.firebaseapp.com",
  projectId: "computer-parts-house",
  storageBucket: "computer-parts-house.appspot.com",
  messagingSenderId: "762279849818",
  appId: "1:762279849818:web:37d38e335cb92277f3cd63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const analytics = getAnalytics(app);
export default auth