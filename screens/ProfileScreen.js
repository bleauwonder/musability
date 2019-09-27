import React from "react";
import { View, Image } from "react-native";
import { Card, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import styles from '../src/style/index.style';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from "native-base";

export default ({ navigation }) => (
  <View style={styles.profilePage}>
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
    <Card title="Kim Graff"
    image={require('../assets/images/spongebob.png')}>
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>KG</Text>
      </View>
      <Button
        full rounded dark
        style={styles.logButton}
        onPress={() => onSignOut().then(() => navigation.navigate("HomeStack"))}>
        <Text style={styles.buttonText}>SIGN OUT</Text>
      </Button>
    </Card>
  </View>
);