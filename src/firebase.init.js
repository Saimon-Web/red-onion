// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDphZONPxATee-rPoADqYRoR9POzycA3ko",
    authDomain: "red-onion-2fc90.firebaseapp.com",
    projectId: "red-onion-2fc90",
    storageBucket: "red-onion-2fc90.appspot.com",
    messagingSenderId: "684369297494",
    appId: "1:684369297494:web:99495403fba8530e69bbf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;