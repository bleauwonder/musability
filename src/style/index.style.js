import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    white: '#ffffff',
    background1: '#8e2138',
    background2: '#3a121a',
    background3: '#790909',
    background4: '#ff9300',
};

export default StyleSheet.create({
  logIn: {
    marginTop: 50,
    alignContent: "center",
    backgroundColor: 'transparent',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: colors.background2
  },
  logButton: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  styleInput: {
    color: 'white',
    fontSize: 14
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  buttonText2: {
    color: '#3a121a',
    fontSize: 14,
    fontWeight: 'bold'
  },
  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 30,
    color: 'white',
    padding: 5,
    margin: 10,
  },
  profilePage: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.background3
  },
  venueStyle: {
    color: 'blue',
    shadowColor: 'rgb(56, 51, 51)',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 30,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -70,
    marginLeft: 180,
  },
  logImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -10,
    marginLeft: 180,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 25,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(56, 51, 51)',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgb(56, 51, 51)',
    textAlign: 'center',
  },
  tabBarOptions: {
     height: 55,
     backgroundColor: '#000000'
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 5,
    color: '#8e2138',
  },
  cardContainer: {
    flex: 1,
    paddingTop: 15,
    height: 200,
    width: 500,
    borderRadius: 20,
    // backgroundColor: '#808080',
  },
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    //changes the main background color 
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    //not this
    exampleContainer: {
        paddingVertical: 25,
        backgroundColor: 'transparent'
    },
    //not this
    exampleContainerDark: {
        backgroundColor: 'transparent'
    },
    //background for the card carousel component 
    //THIS ONE
    exampleContainerLight: {
      backgroundColor: 'transparent'
      },
    title: {
        // paddingHorizontal: 30,
        padding: 5,
        color: 'rgb(255, 255, 255)',
        backgroundColor: colors.background2,
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        textTransform: 'lowercase',
        letterSpacing: 1,
        width: wp(95),
    },
    titleDark: {
      // color: 'rgb(255, 255, 255)',
      // backgroundColor: colors.background2,
    },
    // imageGallery: {
    //   width: wp(70),
    //   flex: 1, 
    //   backgroundColor: 'black',
    // },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible', // for custom animations
    },
    //not this
    sliderContentContainer: {
        paddingVertical: 5 // for custom animation
    },
    //not this
    paginationContainer: {
        paddingVertical: 5
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5
    },
    navBar: {
      backgroundColor: 'black'
    },
});
