// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm5vkTyWHRnUUtV8PAssScQVRtWJuJkGI",
    authDomain: "clase30nov.firebaseapp.com",
    projectId: "clase30nov",
    storageBucket: "clase30nov.appspot.com",
    messagingSenderId: "955667945181",
    appId: "1:955667945181:web:604c8b4571e0368b2e6d34",
    measurementId: "G-Z4WFFKJWHC"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const google = new GoogleAuthProvider()

export {
    app,
    google
}