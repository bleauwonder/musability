import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Linking, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles, { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import MUSIC_IMAGE from '../assets/images/musicnote.png';
import * as firebase from 'firebase';
import { H1, H2, H3, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
//icons that render yes or no based on information
const yesIcon = <Icon 
  size={30}
  name='check-circle'
  type='ionicon'
  color='#006400'
  aria-label='yes'
  />;

const noIcon = <Icon
  size={30}
  name='times-circle'
  type='ionicon'
  color='#8e2138'
  aira-label='no'
  />;

const unknownIcon = <Icon
  size={30}
  name='question-circle'
  type='ionicon'
  color='#708090'
  aira-label='no'
  />;

// import Map from '../components/Map';

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
            <View style={styles.modalContent}>  
            <Button
                light
                onPress={() => this.setState({ visibleModal: null })}
                aria-label="close"
                style={{margin: 2}}
                >
                  <Text> CLOSE </Text>
                </Button>
               <Text>
                 <H1>{this.props.data.name}</H1>
               </Text>
                <Text 
                  style={{color: 'blue'}}
                  onPress={() => Linking.openURL(this.props.data.href)}>
                    {this.props.data.href}
                </Text>
                <Text>
                  {this.props.data.address}
                </Text> 
                <Text>
                  {this.props.data.city}
                </Text>
                <Text>
                  {this.props.data.state} 
                </Text>
                <Text>
                  {this.props.data.zip} 
                </Text>
                
                <Text>
                  <H3>Overall Rating</H3>
                    {this.props.data.overallRating}
                </Text>
                <Text>
                  <H3>Anonymity Rating</H3>
                    {this.props.data.anonymityRating}
                </Text>
                <Text>
                  ELEVATOR: {this.props.data.elevator ? yesIcon : noIcon } 
                </Text>
                <Text>
                  RAMP:  {this.props.data.ramps ? yesIcon : noIcon } 
                </Text>
                <Text>
                  RAMP COMMNETS: {this.props.data.rampComment}
                </Text>
                <Text>
                  RESTROOM: {this.props.data.restrooms ? yesIcon : noIcon } 
                </Text>
                <Text>
                  RESTROOM KEY?:  {this.props.data.false ? yesIcon : noIcon } 
                </Text>
                <Text>
                  <H3>Restroom Comments</H3>
                  {this.props.data.restroomComment}
                </Text>
                <Text>
                  <H2>Venue Comments</H2>
                </Text>
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
    };
};
export default CarouselItem;

