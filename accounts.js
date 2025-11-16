// src/services/authService.js (for purely client-side auth)

import { auth } from './firebase.js';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


/**
 * Creates a new user account with email and password.
 * On success, the user is automatically logged in and their session is stored locally.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's chosen password.
 * @returns {Promise<object|null>} A promise that resolves with the user object on success.
 */
async function createAccount(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Account created successfully (client-side):", user.email);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating account:", errorCode, errorMessage);
    throw error; // Re-throw for UI to handle
  }
}

/**
 * Logs in an existing user with email and password.
 * On success, the user's session is loaded from local storage and updated.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<object|null>} A promise that resolves with the user object on success.
 */
async function loginAccount(email, password) { // Renamed from "loadAccount" to "loginAccount" for clarity
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in successfully (client-side):", user.email);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in:", errorCode, errorMessage);
    throw error; // Re-throw for UI to handle
  }
}

/**
 * Logs out the current user. Clears their session from local storage.
 * @returns {Promise<void>} A promise that resolves when the user is logged out.
 */
async function logoutAccount() {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
  } catch (error) {
    console.error("Error logging out:", error.message);
    throw error;
  }
}

/**
 * Sets up a listener for changes in the user's authentication state.
 * This is crucial for updating your UI when a user logs in, logs out, or automatically loads.
 * @param {function} callback - A function that receives the current user object (or null).
 * @returns {function} An unsubscribe function to stop listening.
 */
function subscribeToAuthChanges(callback) {
  return onAuthStateChanged(auth, callback);
}

// Export the functions for use in other files
export {
  createAccount,
  loginAccount,
  logoutAccount,
  subscribeToAuthChanges
};
