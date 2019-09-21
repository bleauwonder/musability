import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import VENUES from '../components/venueJSON'
import PropTypes from 'prop-types';
import styles from '../src/style/SliderEntry.style';


export class MyCarousel extends Component {

    static propTypes = {
        data: PropTypes.object,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

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
            //   onPress={() => { alert(`You've clicked '${title}'`); }}
              >
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

