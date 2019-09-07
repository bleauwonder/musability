import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CardFlip from 'react-native-card-flip';

export default function LinksScreen() {
  return (
    <View>
      <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
      <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>AB</Text></TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>CD</Text></TouchableOpacity>
      </CardFlip>
    </View>
  );
}
/*
    <ScrollView style={styles.container}>
      <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
      }}
      />
    </ScrollView>
*/
LinksScreen.navigationOptions = {
  title: 'Links',
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#851414',
//   },
// });

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingTop: 15,
    height: 200,
    width: 200,
    backgroundColor: '#851414',
  },
});