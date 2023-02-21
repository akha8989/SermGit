// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARNiHuMOTbtCOo7SXbKRcjoNkXzjAOxkI",
    authDomain: "sermappdb.firebaseapp.com",
    projectId: "sermappdb",
    storageBucket: "sermappdb.appspot.com",
    messagingSenderId: "107106217733",
    appId: "1:107106217733:web:88f9d76bbf678859dd916c"
};

// Initialize Firebase
let app;
if (firebase.apps.lenght === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()

export { auth };