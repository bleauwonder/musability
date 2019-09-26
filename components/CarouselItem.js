import React, { Component } from 'react';
import Carousel, { ParallaxImage, isTinder, tinder } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Linking, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles, { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import { Card, Button, Rating } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MUSIC_IMAGE from '../assets/images/musicnote.png';
import CHECK from '';

import { Container, Header, Content, H1, H2, H3 } from 'native-base';

import * as firebase from 'firebase';
// const db = db.collection("venues");
// db("venues").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// });
export class CarouselItem extends Component {    
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
          <View>
              <Button
                onPress={() => this.setState({ visibleModal: null })}
                type="outline"
                style={styles.closeButton}
                title="x"
                />
            <View style={styles.modalContent}>  
               <Text>
                 <H1>{this.props.data.name}</H1>
               </Text>
                <Text style={{color: 'blue'}}
                   onPress={() => Linking.openURL(this.props.data.href)}>
                {this.props.data.href}
                </Text>
                <Text>
                {this.props.data.address}
                {this.props.data.city}
                {this.props.data.state}
                {this.props.data.zip}
                </Text>
                <Text><H3>Overall Rating</H3></Text>
                  <Text>{this.props.data.overallRating}</Text>
                <Text><H3>Anonymity Rating</H3></Text>
                  <Text>{this.props.data.anonymityRating}</Text>
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
                <Text>Elevator? RETURN</Text>
                <Text>Ramp? RETURN</Text>
                <Text>RAMP: {this.props.data.rampComment}</Text>
                <Text>RESTROOM: RETURN</Text>
                <Text>RESTROOM KEY?: RETURN</Text>
                <Text>{this.props.data.restroomComment}</Text>
                <Text><H2>Venue Comments</H2></Text>
                <Text>{this.props.data.overallComment}</Text>
            </View> 
            </View>
        );
        
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
export default CarouselItem;