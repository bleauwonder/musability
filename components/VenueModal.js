import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import styles from '../src/style/SliderEntry.style';
import CarouselItem from './CarouselItem';
import Carousel, { ParallaxImage, isTinder, tinder } from 'react-native-snap-carousel';

export class VenueModal extends Component {
    state = {
        slider1ActiveSlide: this.props.SLIDER_1_FIRST_ITEM|| 1,
      };

    static propTypes = {
        data: PropTypes.object,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object,
        hasModal: PropTypes.boolean
    };

_renderItem ({item, index}) {
    return <CarouselItem hasModal={false} data={item} even={(index + 1) % 2 === 0}/>;
  }

_renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <CarouselItem
        hasModal={false}
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}
    render(){

    
    function renderModalContent (type) {
        const isTinder = type === 'tinder';
        const { data } = this.props;
        return (
        <Modal
            isVisible={this.state.visibleModal === 'fancy'}
            backdropColor="#8e2138"
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600} >

            <View style={styles.modalContent}>  
                <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                <Text style={[styles.title, isTinder ? {} : styles.titleDark]}  > 
                    { name }
                </Text>
                <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
                </Text>
                    <Carousel
                        data={data}
                        renderItem={isTinder ? this._renderLightItem : this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        containerCustomStyle={styles.slider}
                        contentContainerCustomStyle={styles.sliderContentContainer}
                        layout={type}
                        loop={true}
                    />
                </View>
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
                style={styles.closeButton}
                title="Close"
                />
            </View> 
        </Modal> 
      );
  };
  return renderModalContent("fancy")
    }   
};

export default VenueModal;