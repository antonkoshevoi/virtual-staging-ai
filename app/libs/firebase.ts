import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "virtual-staging-ai.firebaseapp.com",
  projectId: "virtual-staging-ai",
  storageBucket: "virtual-staging-ai.appspot.com",
  messagingSenderId: "649665486747",
  appId: "1:649665486747:web:d62eee04c3086a69a24b3e",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
