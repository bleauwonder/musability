import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity, Linking, Dimensions, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styles, { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import MUSIC_IMAGE from '../assets/images/musicnote.png';
import * as firebase from 'firebase';
import { H1, H2, H3, Button, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
//icons that render yes or no based on information
const yesIcon = <Icon
  size={20}
  name='check-circle'
  type='ionicon'
  color='#006400'
  aria-label='yes'
/>;

const noIcon = <Icon
  size={20}
  name='times-circle'
  type='ionicon'
  color='#000'
  aira-label='no'
/>;

const unknownIcon = <Icon
  size={20}
  name='question-circle'
  type='ionicon'
  color='#708090'
  aira-label='no'
/>;

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
          <ScrollView>
          <View style={styles.modalContent}>
          <Button
            style={styles.closeButton}
            bordered dark
            onPress={() => this.setState({ visibleModal: null })}
            aria-label="close"
            >
              <Text style={[{fontWeight: "bold"}, {fontSize: 16}]}> X </Text>
          </Button>
            <Text style={styles.modalText}>
              <H1 style={{color: '#8e2138'}}>{this.props.data.name}</H1>
            </Text>
            <Text
              style={[{ color: 'blue' }, styles.modalText]}
              onPress={() => Linking.openURL(this.props.data.href)}>
              {this.props.data.href}
            </Text>
            <Text style={styles.modalText}>
              {this.props.data.address},{" "} 
              {this.props.data.city},{" "}
              {this.props.data.state},{" "}
              {this.props.data.zip}
            </Text>
            <Text style={{margin: 10}}>
              {/* blank to create a nice barrier between above and below */}
            </Text>
            <Text style={styles.elementText}>
              Overall Rating
            </Text>
            <Text style={styles.ratingText}>
              {this.props.data.overallRating}
              {this.props.data.overallRating ? null : 'No rating yet'}
            </Text>
            <Text style={styles.elementText}>
              Anonymity Rating
            </Text>
            <Text  style={styles.ratingText}>
              {this.props.data.anonymityRating}
              {this.props.data.anonymityRating ? null : 'No rating yet'}
            </Text>
            <Text style={styles.elementText}>
              ELEVATOR: {this.props.data.elevator ? yesIcon : noIcon}
            </Text>
            <Text style={styles.elementText}>
              RAMP:  {this.props.data.ramps ? yesIcon : noIcon}
            </Text>
            <Text style={styles.elementText}>
              RAMP COMMENTS: 
            </Text>
            <Text style={styles.comment}>
              {this.props.data.rampComment}
              {this.props.data.rampComment ? null : 'No feedback yet'}
            </Text>
            <Text style={styles.elementText}>
              RESTROOM: {this.props.data.restrooms ? yesIcon : noIcon}
            </Text>
            <Text style={styles.elementText}>
              RESTROOM KEY?:  {this.props.data.false ? yesIcon : noIcon}
            </Text>
            <Text style={styles.elementText}>
              RESTROOM COMMENTS
            </Text>
            <Text style={styles.comment}>
              {this.props.data.restroomsComment}
              {this.props.data.restroomsComment ? null : 'No feedback yet'}
            </Text>
            <Text>
              <H2 style={styles.elementText}>VENUE REVIEWS</H2>
            </Text>
            <Text style={styles.comment}>
              {this.props.data.overallComment}
              {this.props.data.overallComment  ? null : 'No feedback yet'}
            </Text>
        </View>
        </ScrollView>
    </View>
  );

  get image() {
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
  render() {
    const { data: { name, overallRating }, even } = this.props;
    const uppercaseTitle = name ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        {name.toUpperCase()}
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
          {this.image}
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
        </View>
        <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            {overallRating}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
};
export default CarouselItem;

