import React, { Component } from 'react';
import Carousel, { ParallaxImage, isTinder, tinder } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import VENUES from './venueJSON'
import PropTypes from 'prop-types';
import VenueModal from './VenueModal';
import styles, { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import { Card, Button, Rating } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MUSIC_IMAGE from '../assets/images/musicnote.png';
import * as firebase from 'firebase';
const SLIDER_1_FIRST_ITEM = 1;

export class CarouselItem extends Component {    
    state = {
        visibleModalId: null,
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
        hasModal: this.props.hasModal || true
      };

    static propTypes = {
        data: PropTypes.object,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object,
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
      console.log("LOOK AT ME DATA TIME", this.props.data)
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
                 <View/>

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