
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
  ImageBackground,
  TextInput
} from 'react-native';
import LogIn from '../components/LogIn';
import { LinearGradient } from 'expo-linear-gradient';
import styles, { colors } from '../src/style/index.style'
import logo from '../assets/images/muslogo.png';
import * as firebase from 'firebase';
const IS_ANDROID = Platform.OS === 'android';
import loginImage from '../assets/images/login.jpg'
import { Container, Item, Form, Input, Button, Label } from "native-base";

export default class LogInScreen extends React.Component {
render () {
    //FIRST SHOWS - LOG IN PAGE / SIGN UP PAGE
    //CHANGE TO COPOMENT LATER 
      return (   
        <LogIn />
      );
    }
}