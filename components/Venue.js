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
    TextInput,
    FlatList
} from 'react-native';
import connectToFirebase from '../utils/firebase';

export default class Venues extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            venues: [],
        };
    }
    
    componentDidMount() {
        connectToFirebase().ref('/venues').on('child_added', snapshot => {
            const { venues } = this.state;
            venues.push(snapshot);

            this.setState({ venues });
            console.log(venues)
        })
    }


    render() {
        const {venues, loading} = this.state;
        console.log(venues)
        return venues;
    }



}