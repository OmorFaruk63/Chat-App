import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDclsEZ2BAdA5qukl5fjFUzOYSolvz1pAc",
  authDomain: "halal-jibika-dd963.firebaseapp.com",
  databaseURL: "https://halal-jibika-dd963-default-rtdb.firebaseio.com",
  projectId: "halal-jibika-dd963",
  storageBucket: "halal-jibika-dd963.appspot.com",
  messagingSenderId: "624943952527",
  appId: "1:624943952527:web:a37d8856344864a2f136fa",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
