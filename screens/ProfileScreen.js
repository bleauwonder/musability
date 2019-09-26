import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import styles from '../src/style/index.style';
import { LinearGradient } from 'expo-linear-gradient';


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
    <Card title="Kim Graff">
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
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigation.navigate("HomeStack"))}
      />
    </Card>
  </View>
);