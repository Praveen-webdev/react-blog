import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOINM8b-_KBl7YFXLvWz7U2YVaqutQYqI",
  authDomain: "react-blog-webapp.firebaseapp.com",
  projectId: "react-blog-webapp",
  storageBucket: "react-blog-webapp.appspot.com",
  messagingSenderId: "546765678693",
  appId: "1:546765678693:web:81991f5f72f3aa7daf7e8c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

