import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

const ImageDeatil = (props) => {
    console.log(props);
    return (
        <View>
            <Image source = {props.imageSource}/>
            <Text>{props.imageTitle}</Text>
            <Text>{props.imageScore} / 10</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDeatil;