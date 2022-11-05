import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbQyQLDL5cRONAS7ifSQQncxgFsQmQtqY",
  authDomain: "movieapp-46f7d.firebaseapp.com",
  projectId: "movieapp-46f7d",
  storageBucket: "movieapp-46f7d.appspot.com",
  messagingSenderId: "756936585552",
  appId: "1:756936585552:web:5cdc5a3361db02e1d63c55",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
