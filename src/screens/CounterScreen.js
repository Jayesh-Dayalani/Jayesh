import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const CounterScreen = () => {
  let counter = 0;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counter++;
          console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          counter--;
          console.log(counter);
        }}
      />
      <Text>CounterScreen</Text>
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
