import firebase from './config';

const firestore = firebase.firestore();
const storage = firebase.storage();

export {firestore, storage};