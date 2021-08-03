import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const publicRuntimeConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    appId: process.env.REACT_APP_ID,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(publicRuntimeConfig);

export default firebase;