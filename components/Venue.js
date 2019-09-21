import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    TextInput
} from 'react-native';
import * as firebase from 'firebase';


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


    const database = firebase.database();
    var fetchedVenues = [];
    database.ref("/venues").on("child_added", snapshot => {
        return fetchedVenues.push(snapshot.val());

    }).then(() => this.setState({ venues: fetchedVenues }))
}

