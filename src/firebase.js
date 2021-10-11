import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBVGUgCcXs4iQJMlE0Nu8iUShAO0GPp0V4",
  authDomain: "reactchat-7a410.firebaseapp.com",
  projectId: "reactchat-7a410",
  storageBucket: "reactchat-7a410.appspot.com",
  messagingSenderId: "864563239800",
  appId: "1:864563239800:web:d4ad7a568cf06e50c5868d"
}).auth()