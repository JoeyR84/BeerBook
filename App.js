import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./navigator";
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator />
      </View>
    );
  }
}

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
