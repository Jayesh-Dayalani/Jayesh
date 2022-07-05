import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen!!</Text>
      <ImageDetail
        imageTitle="Forest!"
        imageSource={require("../../assets/forest.jpg")}
        imageScore="9"
      />
      <ImageDetail
        imageTitle="Beach!"
        imageSource={require("../../assets/beach.jpg")}
        imageScore="7"
      />
      <ImageDetail
        imageTitle="Mountain!"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore="8"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
