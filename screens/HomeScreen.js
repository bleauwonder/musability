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
import Modal from "react-native-modal";
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

renderModalContent = () => (
  <View>
    <Text>Hi 👋!</Text>
    <Button
      onPress={() => this.setState({ visibleModal: null })}
      title="Close"
    />
  </View>
);


_renderItem ({item, index}) {
    return <MyCarousel data={item} even={(index + 1) % 2 === 0} />;
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

// THIS IS STILL TO BE COMMENTED OUT 
  // _renderItem ({item, index}) {
  //   return <MyCarousel data={item} even={(index + 1) % 2 === 0} />;
  // }
  //       database.ref('/venues').on("value", snapshot => {
  //     console.log("here");
  //     snapshot.forEach(venue => {
  //       console.log(venue.val().name);
  //     })


    // }), (errorObject) => {
    //   console.log("The read failed:" + errorObject.code);
    // }
    //ABOVE STILL TO BE COMMENTED OUT 
      
      // changing the venue card to what is on the react native card thing 
  venueCard (number, title, type) {
    const isTinder = type === 'tinder';
      return (
        <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
          <Text style={[styles.title, isTinder ? {} : styles.titleDark]}> 
            {`Brooklyn`}
          </Text>
          <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
          </Text>
            <Carousel
                  data={ENTRIES1}
                  renderItem={isTinder ? this._renderLightItem : this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={true}
                  onPress={() => this.setState({ visibleModal: 'fancy' })}
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
          <Modal
            isVisible={this.state.visibleModal === 'fancy'}
            backdropColor="#B4B3DB"
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}
          >
            {this.renderModalContent()}
          </Modal>
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
                    data={ENTRIES3}
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



            {/* <Carousel
                ref={(c) => { this._carousel = c; }}
                data={[{title:"1"}, {title: "2"}, {title: "3"}]}
                renderItem={(args)=>{
                  return this._renderItem(args);
                }}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width-70}
                // itemHeight={Dimensions.get('window').height-300}
                layout={'satack'}
            /> */}

                      {/* <Text style={styles.titleText}>
            Brooklyn Sites
          </Text> */}

                    {/* <Text style={styles.titleText}>
            Manhattan Venues
          </Text> */}


              /* <Card style={[styles.venueStyle, borderRadius: 20]}}
                image={require('../assets/images/venues/Rockwood/Rockwood1.jpg')}
                title='Rockwood Music Hall'>
                <Rating
                  type='custom'
                  ratingImage={MUSIC_IMAGE}
                  onFinishRating={this.ratingCompleted}
                  ratingColor='#800022'
                  ratingBackgroundColor='#c8c7c8'
                  ratingCount={5}
                  imageSize={20}
                  style={{ paddingVertical: 10 }}
                />
                {/* <Button
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#800022' }}
                  title='VIEW MORE' /> */
              /* </Card> */
