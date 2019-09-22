import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Rating } from 'react-native-elements';
import VENUES from './components/venueJSON';
import AppNavigator from './navigation/AppNavigator';


export default function App(props) {
  // react hooks
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [venues, setVenues] = useState(false);

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyBF2aWOLg8IYO9ntBNk6agDXdrasaQMwkM",
      authDomain: "musability-app.firebaseapp.com",
      databaseURL: "https://musability-app.firebaseio.com",
      projectId: "musability-app",
      storageBucket: "",
      messagingSenderId: "93508034987",
      appId: "1:93508034987:web:454f410ea139fe4c2932ee"
    };

    // // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();

     database.ref("/venues").on("value", snapshot => {
    
      snapshot.forEach((venue) => {
       
        <div>
        <View>
          <Card style={styles.venueCard} containerStyle={{ borderRadius: 20 }}
            image={venue.val().image.length ? venue.val().image[0] : "./assets/images/musability-app.png"}
            title={venue.val().name}>
            <Rating
              type='custom'
              ratingImage={"./assets/images/musicnote.png"}
              onFinishRating={this.ratingCompleted}
              ratingColor='#800022'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={20}
              defaultRating={parseInt(venue.val().overallRating[0])}
              style={{ paddingVertical: 10 }}
            />
          </Card>
        </View>
        </div>
        
      })

    }), (errorObject) => {
      console.log("The read failed:" + errorObject.code);
    }

    //Code to initially load all the data from venue.JSON into Firbase, needed only to run once.

    VENUES.forEach(element => {

      var venue = {
        name: element.venue ? element.venue: "",
        website: element.href ? element.href: "",
        address: element.address ? element.address: "",
        overallRating: element.overallRating ? element.overallRating: "",
        anonymityRating: element.anonymityRating ? element.anonymityRating: "",
        elevator: element.elevator ? element.elevator: null,
        ramps: element.ramps ? element.ramps: null,
        rampComment: element.rampComment ? element.rampComment: "",
        restrooms: element.restrooms ? element.restrooms: null,
        restroomKey: element.restroomKey ? element.restroomKey: null,
        restroomsComment: element.restroomsComment ? element.restroomsComment: "",
        overallComment: element.overallComment ? element.overallRating: "",
        image: element.image.length !== 0 ? element.image: ""
      }


    // // database.ref("/venues").push(venue);


    // })

  })



  

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});