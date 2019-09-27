import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { Platform, Image, Text, StatusBar, StyleSheet, View } from 'react-native';
import styles from './src/style/index.style.js';
import { Ionicons } from '@expo/vector-icons';
import AppNavigation from './navigation/AppNavigation'
import AppNavigator from './navigation/AppNavigator';
import { Container, Form, Input, Button, Label } from "native-base";

import LogIn from './components/LogIn';
// import { createRootNavigator } from "./navigation/router";
import { isSignedIn } from "./auth";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [venues, setVenues] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
      // ,
      // <LogIn />
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
      // Tab bar font
      ...Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}
function handleLoadingError(error) {
 
  console.warn(error);
}
function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
} 

// Check for Signed in Profile for future iteration
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