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
  ImageBackground,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles, { colors } from '../src/style/index.style'
import logo from '../assets/images/muslogo.png';
import * as firebase from 'firebase';
const IS_ANDROID = Platform.OS === 'android';
import { Container, Item, Form, Input, Button, Label } from "native-base";
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

export default class LogIn extends React.Component {
  //props and states related to singin function
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }


  //firebase signup function
  SignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  //firebase login function
  LogIn = (email, password) => {
    const { navigate } = this.props.navigation;
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.email);
          () => navigate("Home");
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  //rendering page
  render() {
    //FIRST SHOWS - LOG IN PAGE / SIGN UP PAGE
    //CHANGE TO COPOMENT LATER 
    return (
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
        style={{ width: '100%', height: '100%' }} >
        <View style={styles.loginContent}>
          <Container style={styles.logIn}>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  placeholder='you@domain.com'
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>

              <Button
                full rounded
                bordered danger
                style={styles.logButton}
                onPress={() => this.LogIn(this.state.email, this.state.password).then(() => this.props.navigation.navigate("Home"))
                }>
                <Text>Login</Text>
              </Button>

              <Button
                full rounded danger
                style={styles.logButton}
                onPress={() => this.SignUp(this.state.email, this.state.password)}>
                <Text>Signup</Text>
              </Button>
            </Form>
          </ Container>
        </View>
      </ImageBackground>
    );
  }
}

