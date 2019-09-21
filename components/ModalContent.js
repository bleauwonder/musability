import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class ModalContent extends Component {

  render () {
  <View>
        <Text style={styles.contentTitle}>TITLE</Text>

        <Text>Add Image Here</Text>
          <Text> RATING</Text>
          <Text> # of Review</Text>
        <Text>Description</Text>
        <Text>Review</Text>
      <Button
        onPress={() => this.setState({ visibleModal: null })}
        title="Close"
      />
  </View>
  }
};