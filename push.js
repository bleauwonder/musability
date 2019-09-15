const firebaseConfig = {
    apiKey: "AIzaSyAHhnWeyBtUHJTtigUNMwQv5naDfNwqoOQ",
    authDomain: "musability-91b3d.firebaseapp.com",
    databaseURL: "https://musability-91b3d.firebaseio.com",
    projectId: "musability-91b3d",
    storageBucket: "musability-91b3d.appspot.com",
    messagingSenderId: "168169604472",
    appId: "1:168169604472:web:32bccbafe468799ff2b48d"
};


// // Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);

console.log(firebase);

const database = firebase.database();
VENUES.forEach(element => {
   console.log(element);
});