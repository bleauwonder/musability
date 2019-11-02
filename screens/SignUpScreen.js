import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Keyboard,
} from 'react-native';
import { Button } from 'react-native-elements';
import Carousel, { visibleModal } from 'react-native-snap-carousel';
import { Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';

import CarouselItem from '../components/CarouselItem';
import styles, { colors } from '../src/style/index.style'
import { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';

import * as firebase from 'firebase';

// To be used for future iterations
// import MUSIC_IMAGE from '../assets/images/musicnote.png';
// import * as Animatable from 'react-native-animatable'; 

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

  static propTypes = {
    data: PropTypes.object,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

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
   // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();

    // Filter Firebase JSON for each borough
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
      this.setState({ queensData: qsArray });
    })

    // Show keyboard for Search Bar
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

  // Render items on Carousels
  _renderItem({ item, index }) {
    return <CarouselItem data={item} even={(index + 1) % 2 === 0} onPress={visibleModal} ImageCarousel={this.image}/>;
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

  // Information from Firebase and how it should look on the carousel cards
  venueCard(number, title, type) {
    const isTinder = type === 'tinder';
    const { brooklynData } = this.state;
    return (
      <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>
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
        {/* Header */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <LinearGradient
              colors={['rgba(142, 33, 56, 100)', 'rgba(121, 9, 9, 100)', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top:    0,
                height: 850,
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
                  }/>
              </Row>

            {/* New Search Bar to be used when properly adjusted */} 
             
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

          {/* Where the carousels are rendering within a ScrollView */} 
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

            </Grid>
          </View>
        </ScrollView>
      </View>
    );
  }
};