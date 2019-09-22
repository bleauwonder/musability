
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
import LogIn from '../components/LogIn';
const IS_ANDROID = Platform.OS === 'android';
import { Container, Item, Form, Input, Button, Label } from "native-base";

export default class LogInScreen extends React.Component {
render () {    
      <LogIn />
    }
};