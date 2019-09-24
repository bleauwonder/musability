import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { Platform, Image, Text, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Rating } from 'react-native-elements';
import VENUES from './components/venueJSON';
// import { Container, Item, Form, Input, Button, Label } from "native-base";
import AppNavigator from './navigation/AppNavigator';

import LogIn from './components/LogIn';
import { createRootNavigator } from "./navigation/router";
import { isSignedIn } from "./auth";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       signedIn: false,
//       checkedSignIn: false
//     };
//   }

//   componentDidMount() {
//     isSignedIn()
//       .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
//       .catch(err => alert("An error occurred"));
//   }

  // render() {
  //   const { checkedSignIn, signedIn } = this.state;

  //   // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
  //   if (!checkedSignIn) {
  //     return null;
  //   }

  //   const Layout = createRootNavigator(signedIn);
  //   return <Layout />;
  // }

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [venues, setVenues] = useState(false);

// react hooks
//useEffect Firebase
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyBF2aWOLg8IYO9ntBNk6agDXdrasaQMwkM",
      authDomain: "musability-app.firebaseapp.com",
      databaseURL: "https://musability-app.firebaseio.com",
      projectId: "musability-app",

      storageBucket: "musability-app.appspot.com",

      storageBucket: "",

      messagingSenderId: "93508034987",
      appId: "1:93508034987:web:454f410ea139fe4c2932ee"
    };

    // // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();

    //  database.ref("/venues").on("value", snapshot => {
    
    //   snapshot.forEach((venue) => {
       
        // <div>
        // <View>
        //   <Card style={styles.venueCard} containerStyle={{ borderRadius: 20 }}
        //     image={venue.val().image.length ? venue.val().image[0] : "./assets/images/musability-app.png"}
        //     title={venue.val().name}>
        //     <Rating
        //       type='custom'
        //       ratingImage={"./assets/images/musicnote.png"}
        //       onFinishRating={this.ratingCompleted}
        //       ratingColor='#800022'
        //       ratingBackgroundColor='#c8c7c8'
        //       ratingCount={5}
        //       imageSize={20}
        //       defaultRating={parseInt(venue.val().overallRating[0])}
        //       style={{ paddingVertical: 10 }}
        //     />
        //   </Card>
        // </View>
        // </div>
        
      // })

    // }), (errorObject) => {
    //   console.log("The read failed:" + errorObject.code);
    // }

    //Code to initially load all the data from venue.JSON into Firebase, needed only to run once.

    VENUES.forEach(element => {

      var venue = {
        name: element.name ? element.name: "",
        href: element.href ? element.href: "",
        address: element.address ? element.address: "",
        city: element.city ? element.city: "",
        state: element.state ? element.state: "",
        zip: element.zip ? element.zip: null,
        overallRating: element.overallRating ? element.overallRating: "",
        anonymityRating: element.anonymityRating ? element.anonymityRating: "",
        elevator: element.elevator ? element.elevator: null,
        ramps: element.ramps ? element.ramps: null,
        rampComment: element.rampComment ? element.rampComment: "",
        restrooms: element.restrooms ? element.restrooms: null,
        restroomKey: element.restroomKey ? element.restroomKey: null,
        restroomsComment: element.restroomsComment ? element.restroomsComment: "",
        overallComment: element.overallComment ? element.overallComment: "",
        image: element.image.length !== 0 ? element.image: "",
        displayImage: element.displayImage ? element.displayImage: "",
      }


    database.ref("/venues").push(venue);


    })


  }) //useEffect Firebase Ends

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />,
      <LogIn />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    )
  };
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
