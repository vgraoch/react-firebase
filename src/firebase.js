import { getDatabase } from "firebase/database"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA50IXy7f8S7GqcpLdh9gJFAa4P354qPuo",
  authDomain: "healthyrecipeapp.firebaseapp.com",
  databaseURL: "https://healthyrecipeapp-default-rtdb.firebaseio.com",
  projectId: "healthyrecipeapp",
  storageBucket: "healthyrecipeapp.appspot.com",
  messagingSenderId: "346388713208",
  appId: "1:346388713208:web:965ac4e9a86751186f750d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);