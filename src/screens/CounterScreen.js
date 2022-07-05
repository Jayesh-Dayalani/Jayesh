import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>CounterScreen</Text>
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
