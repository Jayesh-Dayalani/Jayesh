import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

const ImageDeatil = (props) => {
    console.log(props);
    return (
        <View>
            <Image source = {require('../../assets/beach.jpg')}/>
            <Text>{props.imageText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDeatil;