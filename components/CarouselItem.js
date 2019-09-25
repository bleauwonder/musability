import React, { Component } from 'react';
import Carousel, { ParallaxImage, isTinder, tinder } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles, { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import { Card, Button, Rating } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MUSIC_IMAGE from '../assets/images/musicnote.png';
import ImageCarousel from './ImageCarousel';
import * as firebase from 'firebase';


export class CarouselItem extends Component {    
  constructor (props) {
    super(props);
    this.state = {
        visibleModalId: null,
        currentUser: null, 
        data: [],
        visibleModalId: null,
    };
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
    database.ref("/venues").on("value", snapshot => {
      this.setState({ data: snapshot.val()})
    })
  }

    static propTypes = {
        data: PropTypes.object,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

      rendermodalContent (type) {
        const { data } = this.state;
          return (
            <View style={styles.modalContent}>  
                <ImageCarousel
                  data={data}
                  renderItem={isTinder ? this._renderLightItem : this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type === 'tinder'}
                  loop={true}
                   />

                <Text>RATING</Text>
                <Rating
                  type='custom'
                  ratingImage={MUSIC_IMAGE}
                  onFinishRating={this.ratingCompleted}
                  ratingColor='#800022'
                  ratingBackgroundColor='#fff'
                  ratingCount={5}
                  imageSize={20}
                  style={{ paddingVertical: 10 }}
                  />            

                <Button
                onPress={() => this.setState({ visibleModal: null })}
                type="outline"
                style={styles.closeButton}
                title="Close"
                />
            </View> 
        );
      };
        

    get image () {

        const { data: { displayImage }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: displayImage }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: displayImage }}

              style={styles.image}
            />
        );
    }

    render () {
        const renderModal = this.rendermodalContent(3, '"Stack of cards" layout | Loop', 'stack');
        const { data: { name, overallRating }, even } = this.props;

        const uppercaseTitle = name ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { name.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
            //   add modal here
              onPress={() => this.setState({ visibleModal: 'fancy' })}
              >
                <Modal
                    isVisible={this.state.visibleModal === 'fancy'}
                    backdropColor="#8e2138"
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    >

                    { renderModalContent }
                </Modal> 
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { overallRating }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
};


export default CarouselItem;