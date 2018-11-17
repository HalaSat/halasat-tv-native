import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";

import TVStack from "./src/screens/TV";
import PlayerScreen from "./src/components/PlayerScreen";

// TODO:
class ScoresScreen extends React.Component {
  render() {
    return (
      <View style={styles.scoresScreen}>
        <Text style={styles.commingSoon}>Comming soon...</Text>
      </View>
    );
  }
}

// Bottom tabs
const RootStack = createBottomTabNavigator(
  {
    TV: TVStack,
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
  Player: {
    screen: PlayerScreen,
    navigationOptions: {
      header: null,
    },
  },
});

// styles
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "rgb(34, 34, 34)",
    flex: 1,
  },
  scoresScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(34, 34, 34)",
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
  commingSoon: {
    color: "tomato",
    fontSize: 22,
  },
});
