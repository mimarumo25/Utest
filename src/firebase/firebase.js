// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtUV9h0KYfjFfJtOjJofLeUi-OMT_ZDiU",
  authDomain: "utest-geek.firebaseapp.com",
  projectId: "utest-geek",
  storageBucket: "utest-geek.appspot.com",
  messagingSenderId: "250354213693",
  appId: "1:250354213693:web:effb35ea5aef5719f1db54"
};
    

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()

export {
    app,
    google
}