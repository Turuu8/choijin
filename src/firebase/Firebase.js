import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA5FdzEinWwp4MP5ByfhHBCF03QWVR5f6g",
  authDomain: "choijin-temple.firebaseapp.com",
  projectId: "choijin-temple",
  storageBucket: "choijin-temple.appspot.com",
  messagingSenderId: "184673010246",
  appId: "1:184673010246:web:b9b02c59bb1d20a3bec047",
  measurementId: "G-VHYS3Y6015"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTD,
// };

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
