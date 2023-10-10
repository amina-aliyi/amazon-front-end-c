// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import  "firebase/compat/firestore";
// we dont need google analytics...//
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAjqDvN1dhJCVlJ-x3L2Xzt6u7L1sCTd_s",
	authDomain: "c-93147.firebaseapp.com",
	projectId: "c-93147",
	storageBucket: "c-93147.appspot.com",
	messagingSenderId: "224816777145",
	appId: "1:224816777145:web:e99d8fe77a0bfadbc31868",
	measurementId: "G-L387ZYG0EE",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

// we dont need the following aswell
// const analytics = getAnalytics(app);
export { auth , db};
