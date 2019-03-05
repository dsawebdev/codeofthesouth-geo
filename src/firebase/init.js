// Initialize Firebase
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDpPp9-lOhILcjWtoH4ro0zVssZywqbWg0",
    authDomain: "codeofthesouth-geo.firebaseapp.com",
    databaseURL: "https://codeofthesouth-geo.firebaseio.com",
    projectId: "codeofthesouth-geo",
    storageBucket: "",
    messagingSenderId: "473806707827"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();