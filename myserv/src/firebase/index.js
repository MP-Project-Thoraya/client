import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAJvHPxwbv6t4PlZCsPM8mJl7PyogJMozM",
  authDomain: "my-services-2524e.firebaseapp.com",
  projectId: "my-services-2524e",
  storageBucket: "my-services-2524e.appspot.com",
  messagingSenderId: "1089453098511",
  appId: "1:1089453098511:web:2bc38deee470c2fa88c57a",
  measurementId: "G-4XE4C8HH1P"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
