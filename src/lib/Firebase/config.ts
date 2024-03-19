import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnR2KAB0obPdZh94UaSKLgJIYCSoqDv9c",
  authDomain: "my-buss-images.firebaseapp.com",
  projectId: "my-buss-images",
  storageBucket: "my-buss-images.appspot.com",
  messagingSenderId: "1029713861145",
  appId: "1:1029713861145:web:a4bcbd6d967c8d9653e888",
  measurementId: "G-T1Y5SE3J40"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)



