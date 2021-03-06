import React, { Component } from 'react';
import {
  Image,
  Platform,
  Text,
  View,
// ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import loginImage from '../assets/images/login.jpg';
import styles, { colors } from '../src/style/index.style';
import * as firebase from 'firebase';
const IS_ANDROID = Platform.OS === 'android';
import { Container, Item, Form, Input, Button, Label } from "native-base";

// const { navigate } = this.props.navigation;

const firebaseConfig = {
  apiKey: "AIzaSyBF2aWOLg8IYO9ntBNk6agDXdrasaQMwkM",
  authDomain: "musability-app.firebaseapp.com",
  databaseURL: "https://musability-app.firebaseio.com",
  projectId: "musability-app",
  storageBucket: "musability-app.appspot.com",
  messagingSenderId: "93508034987",
  appId: "1:93508034987:web:454f410ea139fe4c2932ee"
};
firebase.initializeApp(firebaseConfig);

export default class LogInScreen extends React.Component {
//props and states related to signin function
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

//creating sign up function
  SignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
    } catch (error) {
      console.log(error.toString(error));
    }
  };

//creating log in function
  LogIn = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
        // .then(res => {
        //   console.log(res.user.email);
        //         });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
        <View style={styles.loginContainer}>
         <LinearGradient
              colors={['rgba(142, 33, 56, 100)', 'rgba(121, 9, 9, 100)', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 850,
              }}
            />
            <Image
              source={
                __DEV__
                  ? require('../assets/images/muslogo.png')
                  : require('../assets/images/muslogo.png')
              }
              style={styles.logImage}
            />
          <Container style={styles.logIn}>
            <Form>
              <Item floatingLabel>
              <Label style={{color: 'white'}}>Email</Label>
                <Input
                  style={styles.styleInput}
                  placeholder='you@domain.com'
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>Password</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>

              <Button
                full rounded
                light
                style={styles.logButton}
                onPress={() => this.LogIn(this.state.email, this.state.password)
                }>
                <Text style={[styles.buttonText, {color: 'black'}]}>LOGIN</Text>
              </Button>

              <Button
                full rounded dark
                style={styles.logButton}
                onPress={() => this.SignUp(this.state.email, this.state.password)}>
                <Text style={styles.buttonText}>SIGNUP</Text>
              </Button>
            </Form>
          </ Container>
        </View>
    );
  }
}

