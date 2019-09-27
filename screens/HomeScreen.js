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
  Keyboard,
} from 'react-native';
import Carousel, { props, visibleModal, renderModalContent } from 'react-native-snap-carousel';
import CarouselItem from '../components/CarouselItem';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Button, Rating, SearchBar } from 'react-native-elements';
import styles, { colors } from '../src/style/index.style'
import { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
// import { VENUES } from '../components/venueJSON';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from "react-native-modal";
import ImageCarousel from '../components/ImageCarousel';
import LOGO from '../assets/images/muslogo.png';
import MUSIC_IMAGE from '../assets/images/musicnote.png';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'; 


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      visibleModalId: null,
      currentUser: null,
      brooklynData: [],
      manhattanData: [],
      queensData: [],
      search: '',
    }
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBF2aWOLg8IYO9ntBNk6agDXdrasaQMwkM",
      authDomain: "musability-app.firebaseapp.com",
      databaseURL: "https://musability-app.firebaseio.com",
      projectId: "musability-app",
      storageBucket: "musability-app.appspot.com",
      storageBucket: "",
      messagingSenderId: "93508034987",
      appId: "1:93508034987:web:454f410ea139fe4c2932ee"
    };
    //   // // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();

    let bkarray = []
    database.ref("/venues").once("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        bkarray.push(childData)
      })
      const bkArray = bkarray.filter(place => {
        if (place.city === "Brooklyn") {
          return true;
        }
      })
      this.setState({ brooklynData: bkArray });
    })
    
    let mnarray = []
    database.ref("/venues").once("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        mnarray.push(childData)
      })
      const mnArray = mnarray.filter((place) => {
          if (place.city === "New York") {
            return true;
          }
      });
      console.log(mnArray.length)
      this.setState({ manhattanData: mnArray });
    })

    let qsarray = []
    database.ref("/venues").once("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        qsarray.push(childData)
      })
      const qsArray = qsarray.filter((place) => {
        if (place.city === "Queens") {
          return true;
        }
      });
      console.log(qsArray.length)
      this.setState({ queensData: qsArray });
    })

    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }

  _renderItem({ item, index }) {
    return <CarouselItem data={item} even={(index + 1) % 2 === 0} onPress={visibleModal} />;
  }

  
  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <CarouselItem
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <CarouselItem data={item} even={false} />;
  }

  _renderDarkItem({ item, index }) {
    return <CarouselItem data={item} even={true} />;
  }

  // VENUE CARD INFORMATION 
  venueCard(number, title, type) {
    const isTinder = type === 'tinder';
    const { brooklynData } = this.state;
    // console.log(brooklynData)
    return (
      <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}  >
          {`Brooklyn`}
        </Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
        </Text>
        <Carousel
          data={brooklynData}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
          onPress={visibleModal}
        />
      </View>
    );
  };


  venueCard2(number, title, type) {
    const isTinder = type === 'tinder';
    const { manhattanData } = this.state;
    // console.log(manhattanData)

    return (
      <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>
          {`Manhattan`}
        </Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
        </Text>
        <Carousel
          data={manhattanData}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
          onPress={visibleModal}
        />
      </View>
    );
  };

  venueCard3(number, title, type) {
    const isTinder = type === 'tinder';
    const { queensData } = this.state;
    // console.log(manhattanData)

    return (
      <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>
          {`Queens`}
        </Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
        </Text>
        <Carousel
          data={queensData}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
          onPress={visibleModal}
        />
      </View>
    );
  };

  render() {
    const renderCard = this.venueCard(3, '"Stack of cards" layout | Loop', 'stack');
    const renderCard2 = this.venueCard2(3, '"Stack of cards" layout | Loop', 'stack');
    const renderCard3 = this.venueCard3(3, '"Stack of cards" layout | Loop', 'stack');


    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <LinearGradient
              colors={['rgba(58, 18, 26, .8)', 'rgba(98, 20, 36, .8)', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: -30,
                height: 600,
              }}
            />
            <Image
              source={
                __DEV__
                  ? require('../assets/images/muslogo.png')
                  : require('../assets/images/muslogo.png')
              }
              style={styles.welcomeImage}
            />

            {/* Search Bar */}
            <Grid>
              <Row>
                <TextInput
                  // onChangeText={text => onChangeText(text)}
                  // value={value}
                  style={{ height: 30, borderColor: 'white', borderRadius: 10, borderWidth: 1, backgroundColor: 'white', width: 300, marginLeft: 20 }}
                />
              {/* <View style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: '#8e2138', justifyContent: 'center', paddingHorizontal: 5 }}>
                <Animatable.View animation="slideInRight" duration={500} style={{ height: 30, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                  <Animatable.View animation={this.state.searchBarFocused?"fadeInLeft":"fadeInRight"} duration= {400}>
                <Icon name={this.state.searchBarFocused?"md-arrow-back":"ios-search"} style={{ fontSize: 24 }} />
                </Animatable.View>
                <TextInput placeholder="Search" style={{ fontSize: 24, marginLeft: 15, flex: 1 }}/>
                </Animatable.View>
                </View>
              </View> */}
                
                <Button     
                  type="clear" 
                  onSub
                  buttonStyle={{ borderRadius: 10, marginLeft: 10, marginRight: 5, marginBottom: 0 }}
                  icon={
                    <Icon
                      name="ios-search"
                      size={15}
                      color="white"
                    />
                  }

 />
              </Row>

              <Row>
                <SafeAreaView style={styles.safeArea}>
                  <View>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(58, 18, 26, .8)'}
                      barStyle={'light-content'}
                    />
                    {this.gradient}
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                      {renderCard}
                      {renderCard2}
                      {renderCard3}
                    </ScrollView>
                  </View>
                </SafeAreaView>
              </Row>

            </ Grid>
          </View>
        </ScrollView>
      </View>
    );
  }
};