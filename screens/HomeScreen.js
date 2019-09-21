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
import Carousel, { props, visibleModal, renderModalContent } from 'react-native-snap-carousel';
import MyCarousel from '../components/MyCarousel'
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Button, Rating } from 'react-native-elements';
import styles, { colors } from '../src/style/index.style'
import { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import { ENTRIES1, ENTRIES3 } from '../static/entries';
import { VENUES } from '../components/venueJSON';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from "react-native-modal";
import ModalContent from '../components/ModalContent';
// import ModalContent from '../components/ModalContent'
// import * as firebase from 'firebase';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const MUSIC_IMAGE = require('../assets/images/musicnote.png');

export default class HomeScreen extends Component {
  

  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        visibleModalId: null,
    };
}



_renderItem ({item, index}) {
    return <MyCarousel data={item} even={(index + 1) % 2 === 0} onPress={visibleModal}/>;
}

_renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <MyCarousel
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}

_renderLightItem ({item, index}) {
    return <MyCarousel data={item} even={false} />;
}

_renderDarkItem ({item, index}) {
    return <MyCarousel data={item} even={true} />;
}

// VENUE CARD INFORMATION 
  venueCard (number, title, type) {
    const isTinder = type === 'tinder';
      return (
        <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
          <Text style={[styles.title, isTinder ? {} : styles.titleDark]}  > 
            {`Brooklyn`}
          </Text>
          <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
          </Text>
            <Carousel
                  data={VENUES}
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


    venueCard2 (number, title, type) {
      const isTinder = type === 'tinder';
        return (
          <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
            <Text style={[styles.title, isTinder ? {} : styles.titleDark]}> 
              {`Manhattan`}
            </Text>
            <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
            </Text>
              <Carousel
                    data={VENUES}
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
  

     render () {
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
              title='Search'/>
        </Row>

        <Row>
          <SafeAreaView style={styles.safeArea}>
            <View>
              <StatusBar
                translucent={true}
                backgroundColor={'rgba(58, 18, 26, .8)'}
                barStyle={'light-content'}
              />
                 { this.gradient }
              <ScrollView
                style={styles.scrollview}
                scrollEventThrottle={200}
                directionalLockEnabled={true}
              >
                { renderCard }
                { renderCard2 }
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