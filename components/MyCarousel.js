import React, { Component } from 'react';
import Carousel, { ParallaxImage, isTinder, tinder } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import VENUES from '../components/venueJSON'
import PropTypes from 'prop-types';
import styles, { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import { ENTRIES1, ENTRIES3 } from '../static/entries';
import { Card, Button, Rating } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MUSIC_IMAGE from '../assets/images/musicnote.png';
import ImageCarousel from '../components/ImageCarousel';


export class MyCarousel extends Component {    
    state = {
        visibleModalId: null,
      };

    static propTypes = {
        data: PropTypes.object,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };


        renderModalContent = (type) => (
            <View style={styles.modalContent}>  
                <ImageCarousel
                  data={VENUES}
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

                <Text>Description</Text>
                
                <Text>Reviews</Text>

                <Button
                onPress={() => this.setState({ visibleModal: null })}
                type="outline"
                title="Close"
                />
            </View> 
        );
        

    get image () {
        const { data: { baseImage }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: baseImage }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: baseImage }}
              style={styles.image}
            />
        );
    }

    render () {
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

                    {this.renderModalContent()}
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

export default MyCarousel;

