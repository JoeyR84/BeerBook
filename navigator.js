import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import BreweriesScreen from "./screens/BreweriesScreen";
import HomeScreen from "./screens/HomeScreen";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>home fucking screen</Text>
        <Text>home fucking screen</Text>
        <Text>home fucking screen</Text>
        <Text>home fucking screen</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Breweries: BreweriesScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
