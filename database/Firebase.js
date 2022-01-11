import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyAEYG6m39yIEoPLeNq-_9QQZAWlD1o_1T0",

  authDomain: "simple-todo-list-2717f.firebaseapp.com",

  projectId: "simple-todo-list-2717f",

  storageBucket: "simple-todo-list-2717f.appspot.com",

  messagingSenderId: "165874620986",

  appId: "1:165874620986:web:1f11425929ce8675953303"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;