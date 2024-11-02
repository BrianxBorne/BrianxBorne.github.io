// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbGA3putZnMhwABVAtvdHu_j6Ve1kFYp8",
    authDomain: "grid-forum.firebaseapp.com",
    databaseURL: "https://grid-forum-default-rtdb.firebaseio.com",
    projectId: "grid-forum",
    storageBucket: "grid-forum.appspot.com",
    messagingSenderId: "491604485212",
    appId: "1:491604485212:web:a14449d4ec620b8a823299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign In Functionality
document.getElementById('sign-in-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Sign in successful:", userCredential);
            window.location.href = "home.html"; // Redirect to home page
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error signing in:", errorMessage);
            alert("Error signing in: " + errorMessage);
        });
});

// Sign Up Functionality
document.getElementById('sign-up-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed up successfully:", userCredential);
            alert("Sign up successful! You can now sign in.");
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Error signing up:", errorMessage);
            alert("Error signing up: " + errorMessage);
        });
});
