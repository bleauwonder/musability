import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet } from 'react-native';

export class MyCarousel extends Component {

    // static propTypes = {
    //     data: PropTypes.object.isRequired,
    //     even: PropTypes.bool,
    //     parallax: PropTypes.bool,
    //     parallaxProps: PropTypes.object
    // };


    static propTypes = {
        data: PropTypes.array.isRequired,
        renderItem: PropTypes.func.isRequired,
        itemWidth: PropTypes.number, // required for horizontal carousel
        itemHeight: PropTypes.number, // required for vertical carousel
        sliderWidth: PropTypes.number, // required for horizontal carousel
        sliderHeight: PropTypes.number, // required for vertical carousel
        activeAnimationType: PropTypes.string,
        activeAnimationOptions: PropTypes.object,
        activeSlideAlignment: PropTypes.oneOf(['center', 'end', 'start']),
        activeSlideOffset: PropTypes.number,
        apparitionDelay: PropTypes.number,
        autoplay: PropTypes.bool,
        autoplayDelay: PropTypes.number,
        autoplayInterval: PropTypes.number,
        callbackOffsetMargin: PropTypes.number,
        containerCustomStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        contentContainerCustomStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        enableMomentum: PropTypes.bool,
        enableSnap: PropTypes.bool,
        firstItem: PropTypes.number,
        hasParallaxImages: PropTypes.bool,
        inactiveSlideOpacity: PropTypes.number,
        inactiveSlideScale: PropTypes.number,
        inactiveSlideShift: PropTypes.number,
        layout: PropTypes.oneOf(['default', 'stack', 'tinder']),
        layoutCardOffset: PropTypes.number,
        lockScrollTimeoutDuration: PropTypes.number,
        lockScrollWhileSnapping: PropTypes.bool,
        loop: PropTypes.bool,
        loopClonesPerSide: PropTypes.number,
        scrollEnabled: PropTypes.bool,
        scrollInterpolator: PropTypes.func,
        slideInterpolatedStyle: PropTypes.func,
        slideStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        shouldOptimizeUpdates: PropTypes.bool,
        swipeThreshold: PropTypes.number,
        useScrollView: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        vertical: PropTypes.bool,
        onBeforeSnapToItem: PropTypes.func,
        onSnapToItem: PropTypes.func
    };

    static defaultProps = {
        activeAnimationType: 'timing',
        activeAnimationOptions: null,
        activeSlideAlignment: 'center',
        activeSlideOffset: 20,
        apparitionDelay: 0,
        autoplay: false,
        autoplayDelay: 1000,
        autoplayInterval: 3000,
        callbackOffsetMargin: 5,
        containerCustomStyle: {},
        contentContainerCustomStyle: {},
        enableMomentum: false,
        enableSnap: true,
        firstItem: 0,
        hasParallaxImages: false,
        inactiveSlideOpacity: 0.7,
        inactiveSlideScale: 0.9,
        inactiveSlideShift: 0,
        layout: 'default',
        lockScrollTimeoutDuration: 1000,
        lockScrollWhileSnapping: false,
        loop: false,
        loopClonesPerSide: 3,
        scrollEnabled: true,
        slideStyle: {},
        shouldOptimizeUpdates: true,
        swipeThreshold: 20,
        useScrollView: !AnimatedFlatList,
        vertical: false
    }

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${title}'`); }}
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
                        { subtitle }
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

