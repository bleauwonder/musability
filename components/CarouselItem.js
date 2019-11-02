import React, { Component } from 'react';
import ParallaxImage from 'react-native-snap-carousel';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Linking, 
  ScrollView, 
} from 'react-native';
import PropTypes from 'prop-types';
import styles, { sliderWidth, itemWidth } from '../src/style/SliderEntry.style';
import Modal from "react-native-modal";
import { H1, H2, H3, Button, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import VenueGallery from '../components/VenueGallery';
import { onSignOut } from "../auth";

// For future iterations to put a grid into the modal and music images for the rating
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import MUSIC_IMAGE from '../assets/images/musicnote.png';


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

  _renderItem({ item, index }) {
    console.log(this.props.data);
      return <ImageCarousel data={item} even={(index + 1) % 2 === 0}/>;
    }

  _renderItemWithParallax({ item, index }, parallaxProps) {
      return (
        <ImageCarousel
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
      );
    }

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
              <Text style={[{fontWeight: "normal"}, {fontSize: 16}]}> X </Text>
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
          
          {/* <Text style={{margin: 10}}> </Text>*/}
            
        <VenueGallery >
        {this.props.data.image}
        </VenueGallery>

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
              Elevator: {this.props.data.elevator ? yesIcon : noIcon}
          </Text>
          <Text style={styles.elementText}>
              Ramp:  {this.props.data.ramps ? yesIcon : noIcon}
          </Text>
          <Text style={styles.elementText}>
              Ramp/Elevator Comments: 
          </Text>
          <Text style={styles.comment}>
            {this.props.data.rampComment}
            {this.props.data.rampComment ? null : 'No feedback yet'}
          </Text>
          <Text style={styles.elementText}>
              Restroom: {this.props.data.restrooms ? yesIcon : noIcon}
          </Text>
          <Text style={styles.elementText}>
              Restroom Key?:  {this.props.data.false ? yesIcon : noIcon}
          </Text>
          <Text style={styles.elementText}>
              Restroom Comments
          </Text>
          <Text style={styles.comment}>
              {this.props.data.restroomsComment}
              {this.props.data.restroomsComment ? null : 'No feedback yet'}
          </Text>
          <Text>
            <H2 style={styles.elementText}>Overall Reviews for Venue</H2>
          </Text>
            <Text style={styles.comment}>
              {this.props.data.overallComment}
              {this.props.data.overallComment  ? null : 'No feedback yet'}
          </Text>
          <Button
            full rounded light
            style={styles.logButton}
            onPress={() => this.props.navigation.navigate("ReviewStack")}>
          <Text style={styles.buttonText2}>add review</Text>
        </Button>
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
        {name.toLowerCase()}
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

