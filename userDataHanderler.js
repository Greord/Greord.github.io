// Make sure your imports are correct:
import { db } from './firebase.js';
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const allowedCookieKeys = ["Rolls", "PW", "JJOL", "T", "GT", "TB", "TM"];

function getFilteredCookiesObject() {
  const allCookies = document.cookie.split('; ').reduce((acc, cookiePair) => {
    const [key, ...valueParts] = cookiePair.split('=');
    const cookieKey = decodeURIComponent(key.trim());
    const cookieValue = decodeURIComponent(valueParts.join('=') || '');
    acc[cookieKey] = cookieValue;
    return acc;
  }, {});

  const filteredCookies = {};
  allowedCookieKeys.forEach(key => {
    if (allCookies[key] !== undefined) {
      filteredCookies[key] = allCookies[key];
    }
  });
  return filteredCookies;
}

async function saveSpecificUserCookies(userId) {
  const filteredCookieData = getFilteredCookiesObject();
  const userDocRef = doc(db, 'userData', userId);

  try {
    await setDoc(userDocRef, {
      selected_browser_cookies: filteredCookieData, // This is the field where cookies are saved
      lastCookieSave: new Date().toISOString()
    }, { merge: true });
    console.log(`Specific cookies for user ${userId} successfully saved!`);
  } catch (error) {
    console.error("Error saving specific user cookies to Firestore: ", error);
  }
}

async function getUserDataField(userId, fieldName) {
  const userDocRef = doc(db, 'userData', userId);

  try {
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      if (userData && userData[fieldName] !== undefined) {
        console.log(`Retrieved field "${fieldName}" for user ${userId}.`);
        return userData[fieldName];
      } else {
        console.log(`Field "${fieldName}" not found in 'userData' document for user ${userId}.`);
        return null;
      }
    } else {
      console.log(`No 'userData' document found for user ${userId}.`);
      return null;
    }
  } catch (error) {
    console.error(`Error retrieving field "${fieldName}" from 'userData' document: `, error);
    return null;
  }
}

/**
 * Loads specific cookies from Firestore and sets them in the browser.
 * Expects cookies to be stored as an object under 'selected_browser_cookies' field.
 * @param {string} userId The unique ID of the user.
 */
async function LoadCookies(userId) {
  // 1. Correctly retrieve the field where the cookies are stored
  const storedCookiesObject = await getUserDataField(userId, "selected_browser_cookies");

  if (storedCookiesObject && typeof storedCookiesObject === 'object') {
    console.log(`Loading cookies for user ${userId}...`);
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7); // Make them last 7 days
    const expiresDateString = sevenDaysFromNow.toUTCString(); // Standard format for document.cookie
    // 2. Iterate over the object's key-value pairs
    for (const [key, value] of Object.entries(storedCookiesObject)) {
      // 3. Construct the 'key=value' string and set document.cookie
      // It's good practice to encode the key and value when setting cookies
      // to handle any special characters correctly.
      document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/; expires=${expiresDateString}`;
      console.log(`Set cookie: ${key}=${value}`); // For debugging what's being set
    }
    console.log(`Finished loading cookies for user ${userId}.`);
  } else {
    console.log(`No 'selected_browser_cookies' found or it's not an object for user ${userId}. Nothing to load.`);
  }
}

export { saveSpecificUserCookies, getUserDataField, LoadCookies };


