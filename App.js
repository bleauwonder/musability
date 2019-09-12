import { AppLoading } from 'expo';
import firebase from 'react-native-firebase'
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import venues from './components/venueJSON';

import AppNavigator from './navigation/AppNavigator';



export default function App(props) {
  // react hooks
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAHhnWeyBtUHJTtigUNMwQv5naDfNwqoOQ",
      authDomain: "musability-91b3d.firebaseapp.com",
      databaseURL: "https://musability-91b3d.firebaseio.com",
      projectId: "musability-91b3d",
      storageBucket: "",
      messagingSenderId: "168169604472",
      appId: "1:168169604472:web:32bccbafe468799ff2b48d"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.log(firebase);
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