import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Components Demo"
      />
      <Button onPress={() => navigation.navigate("List")} title="List Demo" />
      {/* <TouchableOpacity onPress = { () => props.navigation.navigate('List')}>
      <Text style = {styles.text}>List Demo</Text>
    </TouchableOpacity> */}

      <Button
        onPress={() => navigation.navigate("Image")}
        title="Images Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Counter Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonText: {
    fontSize: 15,
    marginVertical: 20,
  },
});

export default HomeScreen;
