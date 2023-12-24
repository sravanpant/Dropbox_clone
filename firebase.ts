import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJFJ7RWBc_gsMwEwRuXtAvw5jtMbiSZGY",
  authDomain: "dropbox-clone-289d7.firebaseapp.com",
  projectId: "dropbox-clone-289d7",
  storageBucket: "dropbox-clone-289d7.appspot.com",
  messagingSenderId: "807599922899",
  appId: "1:807599922899:web:1d8fd53dcfe228dc667e26",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
