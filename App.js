import React from "react";
import { View, Text, Image } from "react-native";
import { createStackNavigator } from "react-navigation";

import Root from "./src/screens/Root";

import PlayerScreen from "./src/screens/Player";

const LogoTitle = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={require("./assets/icon.png")}
      style={{ width: 40, height: 40, margin: 5 }}
    />
    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
      HalaSat TV
    </Text>
  </View>
);

// Satck navigator with header
export default createStackNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      title: "HalaSat TV",
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: "#111",
        elevation: 0,
      },
      // headerTitleStyle: {
      //   color: "#fff",
      // },
    },
  },
  Player: {
    screen: PlayerScreen,
    navigationOptions: {
      header: null,
    },
  },
});
