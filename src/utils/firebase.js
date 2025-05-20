// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHBcF2xEsw9NQbOvXmqBwKAoq9KvGRxJ0",
  authDomain: "firstapp-ef117.firebaseapp.com",
  projectId: "firstapp-ef117",
  storageBucket: "firstapp-ef117.appspot.com",
  messagingSenderId: "304897270682",
  appId: "1:304897270682:web:282bd4a8bc7c1350219023",
  measurementId: "G-C1YD04Q21M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);