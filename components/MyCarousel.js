import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import VENUES from '../components/venueJSON'
import PropTypes from 'prop-types';
import styles from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import ModalContent, {renderModalContent} from '../components/ModalContent';
import { Card, Button, Rating } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MUSIC_IMAGE from '../assets/images/musicnote.png'


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


        renderModalContent = () => (
            <View style={styles.modalContent}>  
                <Text>IMAGES</Text>

                <Text>RATING</Text>
                <Rating
                  type='custom'
                  ratingImage={MUSIC_IMAGE}
                  onFinishRating={this.ratingCompleted}
                  ratingColor='#000'
                  ratingBackgroundColor='#800022'
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
            //   onPress={() => this.setState({ visibleModal: 'fancy' })}
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



// original code from before 
    // _renderItem ({item, index}) {
    //     return (
    //         <View style={styles.slide}>
    //             <Text style={styles.title}>{ item.title }</Text>
    //         </View>
    //     );
    // }

export default MyCarousel;

