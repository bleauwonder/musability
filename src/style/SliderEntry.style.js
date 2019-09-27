import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: colors.black
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: colors.black
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: colors.black
    },
    title: {
        color: colors.black,
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    // MODAL STYLE
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalText: {
      margin: 2,
      textAlign: 'center',
      fontSize: 14,
    },
    // ratingTitle: {
    //   padding: 10,
    //   fontSize: 16,
    //   color: '#3a121a',
    //   fontWeight: 'bold'
    // },
    ratingText: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold'
    },
    elementText: {
      padding: 10,
      fontSize: 16,
      color: '#8e2138',
      fontWeight: 'bold'
    },
    comment: {
      padding: 10,
      margin: 10,
      fontSize: 14,
      backgroundColor: '#D3D3D3'
    },
    contentTitle: {
      fontSize: 20,
      marginBottom: 12,
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    scrollableModal: {
      height: 300,
    },
    scrollableModalContent1: {
      height: 200,
      backgroundColor: '#87BBE0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollableModalText1: {
      fontSize: 20,
      color: 'white',
    },
    scrollableModalContent2: {
      height: 200,
      backgroundColor: '#A9DCD3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollableModalText2: {
      fontSize: 20,
      color: 'white',
    },
    customBackdrop: {
      flex: 1,
      backgroundColor: '#87BBE0',
      alignItems: 'center',
    },
    customBackdropText: {
      marginTop: 10,
      fontSize: 17,
    },
    closeButton: {
      width: 20,
      height: 30,
      padding: 0,
      margin: 0,
      alignContent: 'flex-end'
    },
    imageGallery: {
      margin: 10,
      width: wp(75),
      height: 300,
      flex: 1, 
      backgroundColor: '#D3D3D3',
    },
  //   container: {
  //     display: grid,
  //     grid: columns,
  //     template:
  //     display: 'grid',
  //     grid-template-columns: 50,
  //     grid-template-rows: '31vh', '31vh', '31vh',
  //     gap: 2
  //     width: '90%',
  //     margin: 0, 'auto',
  //     height: '100vh',
  //     overflow: 'hidden',
  //     margin-bottom: 10,
  // },
})