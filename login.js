// src/main.js
let user; // This 'user' variable will hold the current authenticated user object

import {
  createAccount,
  loginAccount,
  logoutAccount,
  subscribeToAuthChanges
} from './accounts.js';

import {
    saveSpecificUserCookies,
    getUserDataField,
    LoadCookies
} from './userDataHanderler.js'

// --- HTML elements ---
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signUpButton = document.getElementById('signUpButton');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const loadButton = document.getElementById('loadButton'); // Let's assume this loads all user data
const saveButton = document.getElementById('saveButton');
const statusMessage = document.getElementById('statusMessage');
const currentUserDisplay = document.getElementById('currentUserDisplay');

function showMessage(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.style.color = isError ? 'red' : 'green';
}

function updateAuthUI(loggedInUser) { // Renamed parameter to avoid confusion with global 'user'
  if (loggedInUser) {
    currentUserDisplay.textContent = `Logged in: ${loggedInUser.email} (UID: ${loggedInUser.uid})`;
    signUpButton.style.display = 'none';
    loginButton.style.display = 'none';
    logoutButton.style.display = 'inline-block';
    emailInput.style.display = 'none';
    passwordInput.style.display = 'none';
    // Make sure save/load buttons are visible when logged in
    saveButton.style.display = 'inline-block';
    loadButton.style.display = 'inline-block';
  } else {
    currentUserDisplay.textContent = "Not logged in.";
    signUpButton.style.display = 'inline-block';
    loginButton.style.display = 'inline-block';
    logoutButton.style.display = 'none';
    emailInput.style.display = 'inline-block';
    passwordInput.style.display = 'inline-block';
    // Hide save/load buttons when logged out
    saveButton.style.display = 'none';
    loadButton.style.display = 'none';
  }
}

// Event listener for creating an account
signUpButton.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (!email || !password) {
    showMessage("Please enter both email and password.", true);
    return;
  }
  try {
    showMessage("Creating account...", false);
    const newUser = await createAccount(email, password); // Get user from accounts.js
    // IMPORTANT: The subscribeToAuthChanges listener below will pick this up
    // and update the global 'user' variable and UI.
    showMessage(`Account created and logged in: ${newUser.email}`);
    emailInput.value = '';
    passwordInput.value = '';
  } catch (error) {
    showMessage(`Failed to create account: ${error.message}`, true);
  }
});

// Event listener for logging in
loginButton.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (!email || !password) {
    showMessage("Please enter both email and password.", true);
    return;
  }
  try {
    showMessage("Logging in...", false);
    const loggedInUser = await loginAccount(email, password); // Get user from accounts.js
    // IMPORTANT: The subscribeToAuthChanges listener below will pick this up
    // and update the global 'user' variable and UI.
    showMessage(`Logged in as: ${loggedInUser.email}`);
    emailInput.value = '';
    passwordInput.value = '';
  } catch (error) {
    showMessage(`Failed to log in: ${error.message}`, true);
  }
});

// Helper function to check if user is logged in
function checkUserLoggedIn() {
  if (!user) {
    showMessage("Please log in first!", true);
    return false;
  }
  return true;
}

// Event listener for loading data (e.g., all cookies)
loadButton.addEventListener('click', async () => {
  if (!checkUserLoggedIn()) return; // Ensure user is logged in

  try {
    showMessage("Loading cookies...", false);
    // Assuming you have a function named 'getStoredCookiesObjectFromFirestore' from our previous discussion
    // Or you could use getUserDataField(user.uid, "selected_browser_cookies");
    await LoadCookies(user.uid)
    showMessage(`Loaded cookies for: ${user.email}`);
  } catch (error) {
    showMessage(`Failed to load cookies: ${error.message}`, true);
  }
});

// Event listener for saving data (e.g., specific cookies)
saveButton.addEventListener('click', async () => {
  if (!checkUserLoggedIn()) return; // Ensure user is logged in

  try {
    showMessage("Saving cookies...", false);
    // saveSpecificUserCookies expects just the userId as the first argument,
    // and it uses the global allowedCookieKeys from its own module.
    await saveSpecificUserCookies(user.uid);
    showMessage(`Saved cookies for: ${user.email}`);
  } catch (error) {
    showMessage(`Failed to save cookies: ${error.message}`, true);
  }
});


// Event listener for logging out
logoutButton.addEventListener('click', async () => {
  try {
    showMessage("Logging out...", false);
    await logoutAccount();
    showMessage("Logged out successfully.");
    // The subscribeToAuthChanges listener will also clear the global 'user' variable here.
  } catch (error) {
    showMessage(`Failed to log out: ${error.message}`, true);
  }
});

// Subscribe to authentication state changes to update UI and global 'user' variable
document.addEventListener('DOMContentLoaded', () => {
  console.log("Firebase Auth client ready.");
  subscribeToAuthChanges((loggedInUser) => {
    // This is the crucial step: update the global 'user' variable
    user = loggedInUser;
    updateAuthUI(loggedInUser);
  });
});
