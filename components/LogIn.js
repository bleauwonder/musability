
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
import Video from 'react-native-video';

export default class LogIn extends React.Component {
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
                  <Input autoCapitalize="none" autoCorrect={false} />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </Item>
                <Button 
                full rounded 
                bordered danger
                style={styles.logButton}>
                  <Text>Login</Text>
                </Button>
                <Button 
                full rounded danger 
                style={styles.logButton}> 
                  <Text>Signup</Text>
                </Button>
              </Form>
            </ Container>
        </View>
      </View>

      );
    }
}