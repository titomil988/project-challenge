import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
//npm i firebase
// PROJECT ID: fir-challenge-25b89

//const firebaseConfig = {
//    apiKey: process.env.REACT_APP_API_KEY,
//    authDomain: process.env.REACT_APP_PROJECT_ID + '.firebaseapp.com',
//    projectId: process.env.REACT_APP_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
//};

const firebaseConfig = {
    apiKey: 'AIzaSyAhe9FzC7srKLF5l6AGUfCc84pI9euJ6oc',
    authDomain: 'fir-challenge-25b89.firebaseapp.com',
    projectId: 'fir-challenge-25b89',
    storageBucket: "fir-challenge-25b89.appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);
