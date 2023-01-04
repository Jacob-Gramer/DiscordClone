import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCcu2ERUukaBaL5rjhXHcTkP_zEsN9v3QY",
    authDomain: "discord-clone-59535.firebaseapp.com",
    projectId: "discord-clone-59535",
    storageBucket: "discord-clone-59535.appspot.com",
    messagingSenderId: "903044014196",
    appId: "1:903044014196:web:534b663b8b6e7863ac7121",
    measurementId: "G-DBEWWG7MZS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;