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
import Carousel, { props } from 'react-native-snap-carousel';
import MyCarousel from '../components/MyCarousel'
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Button, Rating } from 'react-native-elements';
import styles, { colors } from '../src/style/index.style'
import { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import { ENTRIES1, ENTRIES2, ENTRIES3, ENTRIES4 } from '../static/entries';
import { VENUES } from '../components/venueJSON'
import { Col, Row, Grid } from 'react-native-easy-grid';
import connectToFirebase from '../utils/firebase';
import Venue from '../components/Venue';



const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const MUSIC_IMAGE = require('../assets/images/musicnote.png');



export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      venues: []
    };
  }

  componentDidMount() {
    const data = VENUES;
    this.setState({ venues: data });
  }

  _renderItem({ item, index }) {
    return <MyCarousel data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <MyCarousel
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );

  }

  _renderLightItem({ item, index }) {
    // console.log("TCL: _renderLightItem -> item", item)
  
    return <MyCarousel data={item} even={false} />;
  }

  _renderDarkItem({ item, index }) {
    return <MyCarousel data={item} even={true} />;
  }

  // THIS IS STILL TO BE COMMENTED OUT 


  //ABOVE STILL TO BE COMMENTED OUT 

  // changing the venue card to what is on the react native card thing 
  venueCard(number, title, type ) {
    const isTinder = type === 'tinder';
    return (
      <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>
          {`Brooklyn`}
        </Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
        </Text>
        <Carousel
          data={this.state.venues}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
        {/* <Rating
                  type='custom'
                  ratingImage={MUSIC_IMAGE}
                  onFinishRating={this.ratingCompleted}
                  ratingColor='#000'
                  ratingBackgroundColor='#800022'
                  ratingCount={5}
                  imageSize={20}
                  style={{ paddingVertical: 10 }}
            /> */}
      </View>
    );
  };

  venueCard2(number, title, type) {
    const isTinder = type === 'tinder';
    return (
      <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>
          {`Manhattan`}
        </Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
        </Text>
        <Carousel
          data={this.state.venues}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
        {/* <Rating
                    type='custom'
                    ratingImage={MUSIC_IMAGE}
                    onFinishRating={this.ratingCompleted}
                    ratingColor='#000'
                    ratingBackgroundColor='#800022'
                    ratingCount={5}
                    imageSize={20}
                    style={{ paddingVertical: 10 }}
              /> */}
      </View>
    );
  };



  render() {
    console.log(this.state)

    const renderCard = this.venueCard(3, '"Stack of cards" layout | Loop', 'stack');
    const renderCard2 = this.venueCard2(3, '"Stack of cards" layout | Loop', 'stack');
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
                  ? require('../assets/images/musability-app.png')
                  : require('../assets/images/musability-app.png')
              }
              style={styles.welcomeImage}
            />

            {/* Search Bar */}
            <Grid>
              <Row>
                <TextInput
                  // onChangeText={text => onChangeText(text)}
                  // value={value}
                  style={{ height: 40, borderColor: 'white', borderRadius: 10, borderWidth: 1, backgroundColor: 'white', width: 300, marginLeft: 20 }}
                />
                <Button
                  buttonStyle={{ borderRadius: 10, marginLeft: 5, marginRight: 0, marginBottom: 0, backgroundColor: '#000000' }}
                  title='Search' />
              </Row>
              {/*         
        <Row>
        </Row> */}

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


