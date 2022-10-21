import { initializeApp } from "firebase/app"
// import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDGCZDTjqCb57IW1jkiUGI8XvtQXqpkdvk",
    authDomain: "todoapp-ac898.firebaseapp.com",
    projectId: "todoapp-ac898",
    storageBucket: "todoapp-ac898.appspot.com",
    messagingSenderId: "268732107736",
    appId: "1:268732107736:web:fdb9d3ad3602d14f6600ad"
};
initializeApp(firebaseConfig);

const db = getFirestore();
export { db };

