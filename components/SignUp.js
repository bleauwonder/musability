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

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
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
};