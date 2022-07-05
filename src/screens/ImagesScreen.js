import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen!!</Text>
            <ImageDetail imageText = 'Forest!'/>
            <ImageDetail imageText = 'Beach!'/>
            <ImageDetail imageText = 'Mountain!'/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;