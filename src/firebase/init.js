// Initialize Firebase
import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDE9QajbcPIABcVFYDXYUV9uX5mQuZUeQ4",
    authDomain: "geo-codeofthesouth.firebaseapp.com",
    databaseURL: "https://geo-codeofthesouth.firebaseio.com",
    projectId: "geo-codeofthesouth",
    storageBucket: "geo-codeofthesouth.appspot.com",
    messagingSenderId: "342907321531"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();