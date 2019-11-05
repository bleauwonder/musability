import React from "react";
import { View, Image, ScrollView } from "react-native";
import { Card, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import styles from '../src/style/index.style';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Item, Form, Input, Button, Label } from "native-base";

export default class NewReviewScreen extends React.Component {
  //props and states related to signin function
    constructor(props) {
      super(props);
      this.state = {
        venue: "",
        website: "",
        overallRating: "",
        anonymityRating: "",
        ramp: false,
        elevator: false,
        rampComment: "",
        restroom: false,
        restroomKey: false,
        restroomComment: "",
        overallComment: ""
      };
    }

    renderModalContent = (type) => (
    <View>
      <ScrollView>
        <View style={styles.modalContent}>
        <Container style={styles.logIn}>
            <Form>
              <Item floatingLabel>
              <Label style={{color: 'white'}}>venue</Label>
                <Input
                  style={styles.styleInput}
                  placeholder="King's Theatre"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={venue => this.setState({ venue })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>website</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={website => this.setState({ website })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>how anonymous are you? (5 being not noticed, 1 being the entire scene)</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={anonymityRating => this.setState({ anonymityRating })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>are there ramps?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={ramp => this.setState({ ramp })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>is there an elevator?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={elevator => this.setState({ elevator })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>comments about the ramps and elevators (or lack there of)</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={rampComment => this.setState({ rampComment })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>is there an accessible restroom?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={restroom => this.setState({ restroom })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>do you need a key for the accessible restroom?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={restroomKey => this.setState({ restroomKey })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>comments about restrooms</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={restroomComment => this.setState({ restroomComment })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>what is your overall rating for the venue?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={overallRating => this.setState({ overallRating })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>how is the venue overall?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={overallComment => this.setState({ overallComment })}
                />
              </Item>

              <Button
                full rounded dark
                style={styles.logButton}
                onPress={() => onSignOut().then(() => navigation.navigate("ProfileStack"))}>
              <Text style={styles.buttonText}>add review</Text>
              </Button>
              </Form>
              </Container>
        </View>
      </ScrollView>
    </View>
  );


  render() {
    return (
        <View style={styles.loginContainer}>
          <ScrollView>
         <LinearGradient
              colors={['rgba(142, 33, 56, 100)', 'rgba(121, 9, 9, 100)', 'transparent']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: 850,
              }}
            />
            <Image
              source={
                __DEV__
                  ? require('../assets/images/muslogo.png')
                  : require('../assets/images/muslogo.png')
              }
              style={styles.logImage}
            />
          <Container style={styles.logIn}>
            <Form>
              <Item floatingLabel>
              <Label style={{color: 'white'}}>venue</Label>
                <Input
                  style={styles.styleInput}
                  placeholder="King's Theatre"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={venue => this.setState({ venue })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>website</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={website => this.setState({ website })}
                />
              </Item>

              <Item floatingLabel>
                <Label style={{color: 'white'}}>how anonymous are you? (5-not noticed, 1-you are the scene)</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={anonymityRating => this.setState({ anonymityRating })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>are there ramps?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={ramp => this.setState({ ramp })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>is there an elevator?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={elevator => this.setState({ elevator })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>comments about the ramps and elevators (or lack there of)</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={rampComment => this.setState({ rampComment })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>is there an accessible restroom?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={restroom => this.setState({ restroom })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>do you need a key for the accessible restroom?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={restroomKey => this.setState({ restroomKey })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>comments about restrooms</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={restroomComment => this.setState({ restroomComment })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>what is your overall rating for the venue?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={overallRating => this.setState({ overallRating })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>how is the venue overall?</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={overallComment => this.setState({ overallComment })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{color: 'white'}}>Add your photos</Label>
                <Input
                  style={styles.styleInput}
                  color='white'
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={overallComment => this.setState({ overallComment })}
                />
              </Item>

            <Button
                full rounded light
                style={styles.logButton}
                onPress={() => onSignOut().then(() => navigation.navigate("ProfileStack"))}>
              <Text style={styles.buttonText2}>add review</Text>
            </Button>

            </Form>
          </ Container>
          </ScrollView>
        </View>
    );
  }
}
