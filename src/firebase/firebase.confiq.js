import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDm2pvoKgUGauLE7erLdWXUIDmtZg87qYo",
    authDomain: "jobbox-again.firebaseapp.com",
    projectId: "jobbox-again",
    storageBucket: "jobbox-again.appspot.com",
    messagingSenderId: "820079580809",
    appId: "1:820079580809:web:4d408f896ff99e16bad858"
  };

// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain,
//     projectId:process.env.REACT_APP_projectId,
//     storageBucket:process.env.REACT_APP_storageBucket,
//     messagingSenderId:process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;