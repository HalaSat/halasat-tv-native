import React from "react";
import { TouchableNativeFeedback, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import TV from "./TV";
import Players from "./Players";

const TabBarButtonComponent = props => (
  <TouchableNativeFeedback onPress={props.onPress} useForeground>
    <View {...props} />
  </TouchableNativeFeedback>
);

// Bottom tabs
export default createBottomTabNavigator(
  {
    TV,
    Players,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarButtonComponent: TabBarButtonComponent,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "TV") {
          iconName = `ios-desktop${focused ? "" : "-outline"}`;
        } else if (routeName === "Players") {
          iconName = `ios-football${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: "#111",
      },
      activeTintColor: "tomato",
      inactiveTintColor: "#f2f2f2",
    },
  },
);
