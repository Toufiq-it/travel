// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5P8rvxp3j6k7ajqfw-74f-fiUw4roPY",
  authDomain: "travel-guide-566a8.firebaseapp.com",
  projectId: "travel-guide-566a8",
  storageBucket: "travel-guide-566a8.appspot.com",
  messagingSenderId: "711662623537",
  appId: "1:711662623537:web:2f1b55ffb71edf89fa6e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;