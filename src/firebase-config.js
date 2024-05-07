import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDcWpowprtQ8JsmE5gmKpFbEHODP5GQDwE",
    authDomain: "evergrow-coin-73b98.firebaseapp.com",
    projectId: "evergrow-coin-73b98",
    storageBucket: "evergrow-coin-73b98.appspot.com",
    messagingSenderId: "837249048940",
    appId: "1:837249048940:web:5adab00ab02398976bd349",
    measurementId: "G-1ZLMJ85SYQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);