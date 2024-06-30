import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import specific Firestore functions
import { getAuth } from 'firebase/auth'; // Import specific Auth functions

// Your Firebase project configuration (replace placeholders with your actual values)


// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);




export { db , auth };