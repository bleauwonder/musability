import * as firebase from 'firebase';

export default function connectToFirebase(){
    let database
    var firebaseConfig = {
        apiKey: "AIzaSyAHhnWeyBtUHJTtigUNMwQv5naDfNwqoOQ",
        authDomain: "musability-91b3d.firebaseapp.com",
        databaseURL: "https://musability-91b3d.firebaseio.com",
        projectId: "musability-91b3d",
        storageBucket: "",
        messagingSenderId: "168169604472",
        appId: "1:168169604472:web:32bccbafe468799ff2b48d"
    };

    // // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);

        database = firebase.database();
    }

    return database;
}


