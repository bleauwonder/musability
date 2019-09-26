// // dynamically find device screen orientation 
// // npm react-native-dimension
// import React, { Componenet } from 'react';
// import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

// export default class App extends Componeny {

// constructor() {
//   super();
//   this.state = { orientation: '' }
// }

// getOrientation = () => {
//   if (this.refs.rootView) {
//     if (Dimensions.get('window').width < Dimensions.get('window').height) {
//       this.setState({ orientation: 'portrait'});
//     }
//     else {
//       this.setState({ orientation: 'landscape' });
//     }
//   }
// }

// componentDidMount() {
//   this.getOrientation();
//   Dimensions.addEventListener('change', () => {
//     this.getOrientation();
//   });
// }
// render() {
//   if (this.state.orientation === 'portrait') {
//     return (
//         //Render View to be displayed in portrait mode
//         <AppLoading
//       startAsync={loadResourcesAsync}
//       onError={handleLoadingError}
//       onFinish={() => handleFinishLoading(setLoadingComplete)}
//     />,
//     <View style={styles.container}> 
//       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//       <AppNavigator />
//     </View>,
//     <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
//     <Text style={[styles.title, isTinder ? {} : styles.titleDark]}  > 
//       {`Brooklyn`}
//     </Text>
//     <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
//     </Text>
//       <Carousel
//             data={VENUES}
//             renderItem={isTinder ? this._renderLightItem : this._renderItem}
//             sliderWidth={sliderWidth}
//             itemWidth={itemWidth}
//             containerCustomStyle={styles.slider}
//             contentContainerCustomStyle={styles.sliderContentContainer}
//             layout={type}
//             loop={true}
//             onPress={visibleModal}
//       />
//   </View>
// ),
//     <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
//     <Text style={[styles.title, isTinder ? {} : styles.titleDark]}> 
//       {`Manhattan`}
//     </Text>
//     <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>
//     </Text>
//         <Carousel
//           data={VENUES}
//           renderItem={isTinder ? this._renderLightItem : this._renderItem}
//           sliderWidth={sliderWidth}
//           itemWidth={itemWidth}
//           containerCustomStyle={styles.slider}
//           contentContainerCustomStyle={styles.sliderContentContainer}
//           layout={type}
//           loop={true}
//           onPress={visibleModal}
//         />
//     </View>
//   }
// }
// }