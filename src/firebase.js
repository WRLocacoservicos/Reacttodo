
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARkedZP3Y-4eDjtgxcqmNCyxr0KkHXOVk",
    authDomain: "todo-react-d07aa.firebaseapp.com",
    projectId: "todo-react-d07aa",
    storageBucket: "todo-react-d07aa.appspot.com",
    messagingSenderId: "900801068749",
    appId: "1:900801068749:web:1e8641615b35e252937384"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore (app);

  export { db };