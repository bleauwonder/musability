
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
import { LinearGradient } from 'expo-linear-gradient';
import styles, { colors } from '../src/style/index.style'
import logo from '../assets/images/muslogo.png';
import * as firebase from 'firebase';
const IS_ANDROID = Platform.OS === 'android';
import { Container, Item, Form, Input, Button, Label } from "native-base";
// import Video from 'react-native-video';
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
  Login = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.email);
      });
      } catch (error) {
      console.log(error.toString(error));
    }
  };

  
render () {
    //FIRST SHOWS - LOG IN PAGE / SIGN UP PAGE
    //CHANGE TO COPOMENT LATER 
    return (         
      <View style={styles.loginContainer}>
           {/* <Video
          source={{ uri: 'https://previews.customer.envatousercontent.com/h264-video-previews/2021746.mp4'}}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        /> */}
        
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
                onPress={() => this.LogIn(this.state.email, this.state.password)}>
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
      </View>

      );
    }
}