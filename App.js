import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";

import ChannelsList from "./components/ChannelsList";

// TV content screen
class TvScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <ChannelsList />
      </View>
    );
  }
}

// TODO: scores screen
class ScoresScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Scores</Text>
      </View>
    );
  }
}

// TV tabs
const TvStack = createMaterialTopTabNavigator(
  {
    Sport: TvScreen,
    Movie: TvScreen,
    Series: TvScreen,
    Kids: TvScreen,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#202020",
      },
      activeTintColor: "tomato",
      inactiveTintColor: "#f2f2f2",
    },
  },
);

// Bottom tabs
const RootStack = createBottomTabNavigator(
  {
    TV: TvStack,
    Scores: ScoresScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "TV") {
          iconName = `ios-desktop${focused ? "" : "-outline"}`;
        } else if (routeName === "Scores") {
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

// Satck navigator with header
export default createStackNavigator({
  Root: {
    screen: RootStack,
    navigationOptions: {
      title: "HalaSat TV",
      headerStyle: {
        backgroundColor: "#111",
        elevation: 0,
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  },
});

// styles
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#050001",
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
