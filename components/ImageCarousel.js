import React, { Component } from 'react';
import Carousel, { ParallaxImage, isTinder } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../src/style/SliderEntry.style';
import VENUES, { data, image } from '../components/venueJSON';




export class ImageCarousel extends Component {

    static propTypes = {
        data: PropTypes.array,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object,
        image: PropTypes.array
    };
    
    get image () {
        const { data: { image }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: image[0] }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: 'https://www.billboard.com/files/styles/article_main_image/public/media/le-poisson-rouge-2018-billboard-1548.jpg' }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: even } = this.props;
        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
            </TouchableOpacity>
        );
    }
};

export default ImageCarousel;