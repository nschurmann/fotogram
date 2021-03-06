import * as  firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBc6zE01vQI5_IdwEouTCxmaLe1u2iki4E",
    authDomain: "fotogram-7baf4.firebaseapp.com",
    databaseURL: "https://fotogram-7baf4.firebaseio.com",
    projectId: "fotogram-7baf4",
    storageBucket: "fotogram-7baf4.appspot.com",
    messagingSenderId: "572564598057"
  };
firebase.initializeApp(config);
  

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export const auth = firebase.auth();
export const db = firestore
export const storage = firebase.storage();