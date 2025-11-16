

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js"; // <-- Updated for persistence

const firebaseConfig = {
  apiKey: "AIzaSyC5sClKhuDcnmNcvfX_g0jSEd0oGYmjfrM",
  authDomain: "greord.firebaseapp.com",
  projectId: "greord",
  storageBucket: "greord.firebasestorage.app",
  messagingSenderId: "497011703892",
  appId: "1:497011703892:web:2ee00aebefcd4056da6dc1",
  measurementId: "G-9WD9DD0PQY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// IMPORTANT: Set persistence to LOCAL so Firebase automatically stores/loads sessions in browser's local storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase Auth persistence set to LOCAL.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error.code, error.message);
  });

export { app, db, auth };