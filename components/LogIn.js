
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import Video from "react-native-video";
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

export default class LogIn extends React.Component {
//config for signup function 
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

//rendering the login screen 
render () {
    //FIRST SHOWS - LOG IN PAGE / SIGN UP PAGE
    //CHANGE TO COPOMENT LATER 
      return (       
        <View>
            <Video
            source={require("https://previews.customer.envatousercontent.com/h264-video-previews/2021746.mp4")}
            style={styles.backgroundVideo}
            muted={true}
            repeat={true}
            resizeMode={"cover"}
            rate={1.0}
            ignoreSilentSwitch={"obey"}
            />
        <Container style={styles.logIn}> 
            <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
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
            full rounded bordered danger
            style={{margin: 20}}
            >
                <Text>Login</Text>
            </Button>
            <Button 
            full rounded bordered dark 
            style={{ margin: 20 }} 
            onPress={() => this.SignUp(this.state.email, this.state.password)}> 
                <Text>Signup</Text>
            </Button>
            </Form>
        </ Container>
      </View>
      );
    }
}