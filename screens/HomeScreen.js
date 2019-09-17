import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Button } from 'react-native-elements';
import { Rating } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
const MUSIC_IMAGE = require('../assets/images/musicnote.png');
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 30,
    color: 'white',
    padding: 5,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#8e2138',
  },
  venueStyle: {
    color: 'red',
    shadowColor: 'rgb(56, 51, 51)',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 30,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -70,
    marginLeft: 160,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(56, 51, 51)',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgb(56, 51, 51)',
    textAlign: 'center',
  },
  tabBarOptions: {
     height: 55,
     backgroundColor: '#000000'
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 5,
    color: '#8e2138',
  },
  cardContainer: {
    flex: 1,
    paddingTop: 15,
    height: 200,
    width: 500,
    borderRadius: 20,
    backgroundColor: '#808080',
  },
});

export default class HomeScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
}

_renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
}

_renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}

_renderLightItem ({item, index}) {
    return <SliderEntry data={item} even={false} />;
}

_renderDarkItem ({item, index}) {
    return <SliderEntry data={item} even={true} />;
}
  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }
        // database.ref('/venues').on("value", snapshot => {
    //   console.log("here");
    //   snapshot.forEach(venue => {
    //     console.log(venue.val().name);
    //   })


    // }), (errorObject) => {
    //   console.log("The read failed:" + errorObject.code);
    // }
      
      // changing the venue card to what is on the react native car thing 
        venueCard (number, title, type) {
        const isTinder = type === 'tinder';
        return (
            <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>{`Example ${number}`}</Text>
                <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{title}</Text>
                <Carousel
                  data={isTinder ? ENTRIES2 : ENTRIES1}
                  renderItem={isTinder ? this._renderLightItem : this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={true}
                />
            </View>
        );
    };

              /* <Card style={styles.venueStyle} containerStyle={{borderRadius: 20}}
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

  render () {
    const renderCard = this.venueCard(4, '"Tinder-like" layout | Loop', 'tinder');

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
        {/* search bar goes here, on left side */}
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
          <Text style={styles.titleText}>
            Manhattan Venues
          </Text>
        </Row>

        <Row>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={[{title:"1"}, {title: "2"}, {title: "3"}]}
                renderItem={(args)=>{
                  return this._renderItem(args);
                }}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width-70}
                // itemHeight={Dimensions.get('window').height-300}
                layout={'satack'}
            />
          </Row>
        <Row>
          <Text style={styles.titleText}>
            Brooklyn Sites
          </Text>
        </Row>
        <Row>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={[{title:"1"}, {title: "2"}, {title: "3"}]}
                renderItem={(args)=>{
                  return this._renderItem(args);
                }}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width-70}
                // itemHeight={Dimensions.get('window').height-300}
                layout={'stack'}
            />
            </Row>
        </ Grid>

          </View>
        </ScrollView>
      </View>
  );
}
};
