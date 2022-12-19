// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuvGpAx5mBATg9XLZ-9_6zGBytyCldcMI",
  authDomain: "fir-practice-700fc.firebaseapp.com",
  projectId: "fir-practice-700fc",
  storageBucket: "fir-practice-700fc.appspot.com",
  messagingSenderId: "605343374344",
  appId: "1:605343374344:web:3ecf7700fc5f2caa85c5bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const testFunction = async () => {
  const querySnapshot = await getDocs(collection(db, 'cafes'));
  
  querySnapshot.forEach((doc) => {
    console.log(doc.id)
  })
}

testFunction()