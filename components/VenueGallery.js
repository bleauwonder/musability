import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Gallery from 'react-native-image-gallery';
import styles from '../src/style/SliderEntry.style';

export default class VenueGallery extends Component {

    constructor (props) {
        super(props);
        this.state = {
            index: 0,
            images: [
                // {
                //     caption: 'This image is bundled with the app, so you must provide dimensions for it',
                //     source: require('./static/images/placehold.jpg'),
                //     dimensions: { width: 540, height: 720 }
                // },
                {
                    caption: 'Dance floor',
                    source: { uri: 'https://i.imgur.com/u9UYwWL.jpg' }
                },
                {
                    caption: 'Ramp to access dance floor',
                    source: { uri: 'https://i.imgur.com/qy5fW3X.jpg' }
                },
                {
                    caption: 'Lounge area',
                    source: { uri: 'https://i.imgur.com/O8WljZn.jpg' }
                },  
                {
                    caption: 'Another ramp area',
                    source: { uri: 'https://i.imgur.com/4RVEPzx.jpg' }
                }, 
                {
                    caption: 'Performance area',
                    source: { uri: 'https://i.imgur.com/yGuEG47.jpg' }
                }, 
                {
                    caption: 'Restroom area',
                    source: { uri: 'https://i.imgur.com/7OiGG6c.jpg' }
                },             
                {
                    caption: 'Bathroom',
                    source: { uri: 'https://i.imgur.com/E1HjGP7.jpg' }
                },
            ]
        };
        this.onChangeImage = this.onChangeImage.bind(this);

        // this.addImages();
        // this.removeImages();
        // this.removeImage(2, 3000);
    }

    addImages () {
        // Debugging helper : keep adding images at the end of the gallery.
        setInterval(() => {
            const newArray = [...this.state.images, { source: { uri: 'https://i.imgur.com/O8WljZn.jpg' } }];
            this.setState({ images: newArray });
        }, 5000);
    }

    removeImage (slideIndex, delay) {
        // Debugging helper : remove a given image after some delay.
        // Ensure the gallery doesn't crash and the scroll is updated accordingly.
        setTimeout(() => {
            const newArray = this.state.images.filter((element, index) => index !== slideIndex);
            this.setState({ images: newArray });
        }, delay);
    }

    removeImages () {
        // Debugging helper : keep removing the last slide of the gallery.
        setInterval(() => {
            const { images } = this.state;
            console.log(images.length);
            if (images.length <= 1) {
                return;
            }
            const newArray = this.state.images.filter((element, index) => index !== this.state.images.length - 1);
            this.setState({ images: newArray });
        }, 2000);
    }

    onChangeImage (index) {
        this.setState({ index });
    }

    renderError () {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                 <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>This image cannot be displayed...</Text>
                 <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>... but this is fine :)</Text>
            </View>
        );
    }

    get caption () {
        const { images, index } = this.state;
        return (
            <View style={{ bottom: 0, height: 65, backgroundColor: 'rgba(98, 20, 36, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic' }}>{ (images[index] && images[index].caption) || '' } </Text>
            </View>
        );
    }

    get galleryCount () {
        const { index, images } = this.state;
        return (
            <View style={{ top: 0, height: 65, backgroundColor: 'rgba(98, 20, 36, 0.7)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'right', color: 'white', fontSize: 15, fontStyle: 'italic', paddingRight: '10%' }}>{ index + 1 } / { images.length }</Text>
            </View>
        );
    }

    render () {
        return (
            <View style={{ flex: 1 }} >
                <Gallery
                  style={styles.imageGallery}
                  images={this.state.images}
                  errorComponent={this.renderError}
                  onPageSelected={this.onChangeImage}
                  initialPage={0}
                />
                { this.galleryCount }
                { this.caption }
            </View>
        );
    }
}